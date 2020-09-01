const axios = require("axios");

const getRates = async () => {
  try {
    return await axios.get(
      "https://www.lb.lt/webservices/FxRates/FxRates.asmx/getCurrentFxRates?tp=EU"
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = getRates;
