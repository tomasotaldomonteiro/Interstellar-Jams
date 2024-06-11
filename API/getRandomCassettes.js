const express = require('express');
const router = express.Router();
const connection = require('../database');

router.post("/getRandomCassette", (req, res) => {
    console.log("endpoint=getRandomCassette");

    var player_id = req.session.playerID;

    connection.execute('SELECT * FROM playermatch WHERE player_id = ?',
        [player_id],
        function (err, results, fields) {
            if (err) {
                console.log("couldnt get the player match", err);
            } else {
                const match_id = results[0].playermatch_match_id
                console.log("player match = ", match_id);
                connection.execute('SELECT * FROM playermatch WHERE playermatch_match_id = ?',
                    [match_id],
                    function (err, playerResults, fields) {
                        if (err) {
                            console.log("couldnt get the players from the match requested", err);
                        } else {
                            console.log(playerResults)
                            connection.execute('SELECT match_state_id FROM gamematch',
                            function (err, results, fields) {
                                if (err) {
                                    console.log("couldnt get match_state_id", err);
                                } else {
                                    console.log("Player turn ",results[0].match_state_id);
                                    console.log("Player_id that belongs to that turn =",playerResults[results[0].match_state_id - 1].player_id);
                                    if (playerResults[results[0].match_state_id - 1].player_id == player_id ) {

                                        connection.execute('SELECT * FROM playermatch WHERE player_id = ?',
                                            [player_id],
                                            function (err, results, fields) {
                                                if (err) {
                                                    console.error("Error checking if player has got random cassettes", err);
                                                    res.status(500).send("Error checking if player has got random cassettes");
                                                    return;
                                                }
                                        
                                                if (results[0].has_moved || results[0].has_used_a_cassette || results[0].random_cassettes_optained) {
                                                    console.log("Player has already got random cassettes in this turn or already moved and/or played a cassette");
                                                    res.status(403).send("Player has already got random cassettes in this turn or already moved and/or played a cassette");
                                                    return;
                                                } else {

                                                    connection.execute('SELECT * FROM playermatchcassette WHERE cassette_id = 0 AND player_id = ?',
                                                        [player_id],
                                                        function (err, cassetteResults, fields) {
                                                            if (err) {
                                                                console.error("Error checking if player doesnt have any cassettes", err);
                                                            } else {
                                                                
                                                                console.log("player doesnt have any cassettes");
                                                                
                                                                if (cassetteResults.length == 2) {
                                                                    
                                                                    console.log("player has two free hands");

                                                                    connection.execute('SELECT * FROM cassette', (err, results, fields) =>
                                                                        {
                                                                            if (err) {
                                                                                res.send(err);
                                                                            } else {
                                                                                // console.log(results);
                                                                                // randomValue = Math.floor(Math.random() * results.length);
                                                                                // console.log("random: " + randomValue);
                                                                                var cassette = 1
                                                                                // console.log(cassette.cassette_id);
                                                                                // console.log(player_id);
                                                                
                                                                                connection.execute('UPDATE playermatchcassette SET cassette_id = ? WHERE player_id = ? AND player_cassette_id = ? AND cassette_id = 0',
                                                                                    [1, player_id, 1], 
                                                                                    function (err, results, fields) {
                                                                                        if (err) {
                                                                                            res.send(err);
                                                                                        } else {
                                                                                            res.send("Cassette added to the player's hand 1");
                                                                                        }
                                                                                    }
                                                                                );
                                                                
                                                                                console.log(results);
                                                                                randomValue = Math.floor(Math.random() * results.length);
                                                                                console.log("random: " + randomValue);
                                                                                var cassette = results[randomValue];
                                                                                console.log(cassette.cassette_id);
                                                                                console.log(player_id);
                                                                
                                                                                connection.execute('UPDATE playermatchcassette SET cassette_id = ? WHERE player_id = ? AND player_cassette_id = ? AND cassette_id = 0',
                                                                                    [1, player_id, 2],
                                                                                    function (err, results, fields) {
                                                                                        if (err) {
                                                                                            res.send(err);
                                                                                        }
                                                                                    }
                                                                                );
                                                                            }
                                                                
                                                                            connection.execute('UPDATE playermatch SET random_cassettes_optained = TRUE WHERE player_id = ?',
                                                                                [player_id],
                                                                                function (err,results, fields) {
                                                                                    if (err) {
                                                                                        res.send(err);
                                                                                    }
                                                                                }
                                                                            )
                                                                        }    
                                                                    );

                                                                } else if (cassetteResults.length == 1) {
                                                                    
                                                                    console.log("player has one free hands");
                                                                    
                                                                    connection.execute('SELECT * FROM cassette', (err, results, fields) =>
                                                                        {
                                                                            if (err) {
                                                                                res.send(err);
                                                                            } else {
                                                                                console.log(results);
                                                                                randomValue = Math.floor(Math.random() * results.length);
                                                                                console.log("random: " + randomValue);
                                                                                var cassette = results[randomValue];
                                                                                console.log(cassette.cassette_id);
                                                                                console.log(player_id);
                                                                
                                                                                connection.execute('UPDATE playermatchcassette SET cassette_id = ? WHERE player_id = ? AND player_cassette_id = ? AND cassette_id = 0',
                                                                                    [1, player_id, cassetteResults[0].player_cassette_id],
                                                                                    function (err, results, fields) {
                                                                                        if (err) {
                                                                                            res.send(err);
                                                                                        } else {
                                                                                            res.send("Cassette added to the player's hand 1");
                                                                                        }
                                                                                    }
                                                                                );
                                                                            }
                                                                
                                                                            connection.execute('UPDATE playermatch SET random_cassettes_optained = TRUE WHERE player_id = ?',
                                                                                [player_id],
                                                                                function (err,results, fields) {
                                                                                    if (err) {
                                                                                        res.send(err);
                                                                                    }
                                                                                }
                                                                            )
                                                                
                                                                        }

                                                                    );

                                                                }

                                                            }
                                                        }
                                                    )

                                                }
                                            }
                                        )

                                    } else {
                                        console.log("its not that player turn");
                                    }
                                } 
                            }
                            
                            )
                        }
                    }
                )
            }
        }
    )

});

module.exports = router;