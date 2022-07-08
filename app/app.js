const express = require('express');
const router = require('../api/routes/router');
const app = express();

app.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Service is up' });
});

// router for my api
app.use("/character", router);

// add middleware to handle bad urls and errors
app.use((req,res,next) => {
    const error = new Error("Not Found!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
        message: error.message,
        status: error.status,
        method: req.method,
    },
  });
});

module.exports = app;