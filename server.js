const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
const parseString = require("xml2js").parseString;
const connectDB = require("./config/db");
const getRates = require("./axios/getRates");
const Currency = require("./models/Currency");




// Load config
dotenv.config({ path: "./config/config.env" });

// Database
connectDB();

// Logger
const logger = require("./config/logger");

const app = express();

const PORT = process.env.PORT || 5000;

// External API call
getRates();

const handleError = (err) => {
  console.error(err);
  logger.log("error", error)

};

// Convert rates from xml to JSon and save to DB

const convertRates = async () => {
  try {
    const doesCurrencyExist = await Currency.exists({});
    const xml = await getRates();
    parseString(xml.data, function (err, result) {
      if (result && result.FxRates.FxRate) {
        result.FxRates.FxRate.map((rate, index) => {
          if (rate && rate.CcyAmt) {
            const currency = new Currency({
              currencyId: index,
              name: rate.CcyAmt[1].Ccy[0],
              rate: rate.CcyAmt[1].Amt[0],
            });

            if (doesCurrencyExist) {
              Currency.updateOne(
                { currencyId: index },
                {
                  $set: {
                    "name": rate.CcyAmt[1].Ccy[0],
                    "rate": rate.CcyAmt[1].Amt[0],
                  },
                  $currentDate: { lastModified: true }
                },
                function (err, doc) {
                  if (err) {
                    return handleError(err);
                  }
                  // updated
                }
              );
            } else {
              currency.save(function (err) {
                if (err) return handleError(err);
                // saved
              });
            }
          }
        });
      } else {
        console.log("No results found!");
      }
    });
  } catch (error) {
    console.error(error);
    logger.log("error", error)
  }
};

convertRates();

// @desc Show all rates
// @route GET /rates
app.get("/rates", async (req, res) => {
  try {
    const rates = await Currency.find({});
    if (!rates) throw Error('No rates exist');
    res.json(rates);
    logger.log("info", "GET /rates called");
  } catch (error) {
    console.error(error);
    logger.log("error", error)
  }
});

// React app 
app.use(express.static("client/build"));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", 'build', 'index.html'));
});


app.listen(PORT, () => {
  logger.log("info", `Server running on ${PORT}`);
});
