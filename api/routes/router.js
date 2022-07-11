const express = require("express");
const router = express.Router();
const { getCharacter, getCharacterById } = require('../../services/service');

router.get('/', (req, res, next) => {
    // call a service that calls the api for characters
    getCharacter()
    .then((result) => {
        res.status(200).json(result.data);
    })
    .catch((error) => {
        res.status(501).json({
            error: {
                message: error.message,
                status: error.status,
            },
        });
    });
});

router.get('/:id', (req, res, next) => {
    getCharacterById(req.params.id)
    .then((result) => {
        res.status(200).json(result.data);
    })
    .catch(err => {
        res.status(500).json({
            error: {
                message: err.message,
            },
        });
    });
});

module.exports = router;
