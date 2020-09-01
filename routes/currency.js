const express = require('express')
const router = express.Router()
const dotenv = require("dotenv");
const Currency = require("../models/Currency")
const logger = require("../config/logger");

// Load config
dotenv.config({ path: "./config/config.env" });

// @desc Show all rates
// @route GET /rates
router.get("/rates", async (req, res) => {
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

module.exports = currency;
