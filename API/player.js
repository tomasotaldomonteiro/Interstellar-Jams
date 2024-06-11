const express = require('express');
const router = express.Router();
const connection = require('../database');


router.post('/createPlayer', (request, response) => {
    var playerName = request.body.playerName;
    var playerPassword = request.body.playerPassword;
    if (!playerName || !playerPassword){
        response.send("Missing password or login");
        return;
    }
    connection.execute('SELECT * FROM player WHERE player_name = ?',
        [playerName],
        function (err, results, fields) {
            if (results.length == 0){
                createAccount(request, response, playerName, playerPassword);
            }else{
                // If different of 0 (> 0), means we have a username with that name!
                response.send("Username already picked!");
            }
        });
});

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

    // Checks if the login exists in the database.
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
                    "error": "Invalid username or password 💩"
                });
                return;
            }

            LogPlayerIn(results[0].player_name, results[0].player_id);
        });
    }

    // Logs the player in. We store the playerID and the username in the session.
    function LogPlayerIn(playerName, playerID){
        req.session.playerID = playerID;
        req.session.username = playerName;
        res.status(200).send({
            "message": "Welcome back " + playerName + "!"
        });
    }

    checkLogin();
});


function createAccount(request, response, playerName, playerPassword){
    connection.execute('INSERT INTO player (player_name, player_password) VALUES (?,?)',
        [playerName,playerPassword],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                response.send("Account created - " + playerName);
            }
        });
}

function validateLogin(req, res, next) {
    if (!req.session.playerID){
        res.send("You are not logged in.");
        // res.redirect("./login.html");
        return;
    }

    next();
}

module.exports = router;