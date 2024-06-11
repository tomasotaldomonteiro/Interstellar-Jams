const express = require('express');
const router = express.Router();
const connection = require('../database');



router.post('/login', (req, res) => {
    var playerName = req.body.playerName;
    var playerPassword = req.body.playerPassword;

    console.log("Username: " + playerName)
    console.log("Password: " + playerPassword)

    if (!playerName || !playerPassword){
        res.status(400).send({
            "error": "Missing password or login"
        })
        return;
    }

    function checkLogin(){
        connection.execute('SELECT * FROM player WHERE player_name = ? AND player_password = ?',
        [playerName, playerPassword],
        function (err, results, fields) {
            if (err) {
                res.status(500).send({
                    "error": err
                });
                return;
            }

            if (results.length == 0){
                res.status(404).send({
                    "error": "wrong password or login"
                });
                return;
            }

            LogPlayerIn(results[0].player_name, results[0].player_id);
        });
    }

    function LogPlayerIn(playerName, playerID){
        console.log('Saving ' + playerID + '   /   ' + playerName)
        req.session.playerID = playerID;
        req.session.username = playerName;
        res.status(200).send({
            "message": "Welcome back " + playerName + "!"
        });
    }

    checkLogin();
});




module.exports = router;