const axios = require('axios');

// DIN (drug identification number) found on bottle of every medication in Canada. 

// Health Canada (HC) Drug Proudcts Database API
// uses their own separate id's (drug_code) in their database and 
// cannot search active ingredients directly by DIN on their API.

// Therefore, must use 2 GET requests:
// 1. to GET their id using DIN, and use that
// 2. to GET the active ingredient using their id

const HCapiUrlBase = 'https://health-products.canada.ca/api/drug'



exports.getActiveIngredientByDIN = (req, res) => {
    // 1. GET id using DIN
    axios
        .get(`${HCapiUrlBase}/drugproduct/?din=${req.params.din}`)
        .then(resp => {
            // if DIN does not exist
            if (!resp.data[0]) {
                res.status(400).json(`${req.params.din} DIN does not exist. Please enter a valid DIN.`);
            };
            // 2. use id (drug_code) to get active ingredient
            axios
                .get(`${HCapiUrlBase}/activeingredient/?id=${resp.data[0].drug_code}`)
                .then(resp => {
                    const { ingredient_name, strength, strength_unit } = resp.data[0];

                    res.status(200).json(`${ingredient_name} ${strength} ${strength_unit}`);
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};