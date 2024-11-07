const express = require('express')

const getCredentials = (req, res) => {
    const Credentials = { "username": "Mr. Developer", "password": "safer" }
    res.status(200).json(Credentials)  
}

module.exports = { getCredentials }
