// Base setup
const express = require('express');
const router = express.Router();

// Used to hit the database
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const sqlText = `select * from initial where id = 1;`;
    pool.query(sqlText)
    .then(function(result){
        console.log(result.rows[0].test_val);
        res.send(result.rows);
    }).catch(function(error){
        res.sendStatus(500);
    })
    console.log('Server: Success');
});

module.exports = router;