const axios = require("axios");
require("dotenv").config();

const getCharacter = async () => {
    console.log("Fetching REAL Characters")
    return await axios.get(`${process.env.url}`)
};

// const getCharacterById = async (id) => {
//     console.log("REAL Character by id");
//     return await axios.get(`${process.env.url}${id}`);
// }

    // module.exports = { getCharacter, getCharacterById };
    module.exports = { getCharacter };