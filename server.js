const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const getRates = require("./axios/getRates");
const parseString = require("xml2js").parseString;

const Currency = require("./models/Currency");
// Load config
dotenv.config({ path: "./config/config.env" });

// Database
connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

// External API call
getRates();

const handleError = (err) => {
  console.error(err);
};

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
              currency.updateOne({ currencyId: index }, function (err) {
                if (err) return handleError(err);
                // updated
              });
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
  }
};

convertRates();

// @desc Show all rates
// @route GET /rates
app.get("/rates", async (req, res) => {
  try {
    const rates = await Currency.find({});
    res.json(rates);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
