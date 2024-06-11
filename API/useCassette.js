const express = require('express');
const router = express.Router();
const connection = require('../database');

router.post("/UseHazardCassette", (req, res) => {
    console.log("endpoint=UseHazardCassette");
    var player_id = req.session.playerID;
    var player_cassette_id = req.body.player_cassette_id;
    var tile_id = req.body.tile_id;
    var playertarget_id = req.body.playertarget_id;

    if (!player_id) {
        res.status(403).send("You are not logged in");
        return;
    }

    if (!player_cassette_id || !tile_id) {
        res.status(400).send("Missing required variables");
        return;
    }

    if (!playertarget_id){
        console.log("Playing a cassette that doesnt target a player!");
    }

    console.log("Play the cassette with id", player_cassette_id, "on tile", tile_id);

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

                                        connection.execute('SELECT * FROM playermatchcassette WHERE player_id = ? AND player_cassette_id = ?',
                                            [player_id, player_cassette_id],
                                            function (err, cassetteResults, fields) {
                                                if (err) {
                                                    res.send(err);
                                                } else {

                                                    connection.execute('SELECT * FROM boardmatch WHERE tile_id = ?',
                                                        [tile_id],
                                                        function (err, results, fields) {
                                                            if (err) {
                                                                res.send(err);
                                                            } else {
                                                                console.log("tile_type_id for the tile the hazards wants to go", results[0].tile_type_id);

                                                                if (results[0].tile_type_id == 1) {

                                                                    connection.execute('SELECT * FROM playermatch WHERE playermatch_match_id = ?',
                                                                        [match_id],
                                                                        function (err, results, fields) {
                                                                            if (err) {
                                                                                res.send(err);
                                                                            } else {
                                                                                console.log("get the match ",results);

                                                                                if (results[0].tile_id == tile_id || results[1].tile_id == tile_id || cassetteResults[0].cassette_id > 3) {

                                                                                    console.log("theres a player here you cant put the hazard here");

                                                                                } else {
                                                                                    console.log("theres no player in this tile, the hazard can be placed");

                                                                                    connection.execute("SELECT * FROM playermatch WHERE player_id = ?", [player_id], (err, results) => {
                                                                                        if (err) {
                                                                                            console.error("Error checking if player has moved", err);
                                                                                            res.status(500).send("Error checking if player has moved");
                                                                                            return;
                                                                                        }

                                                                                        if (results[0].cassettes_broken || results[0].random_cassettes_optained) {
                                                                                            console.log("Player cant play a cassette right now");
                                                                                            res.status(403).send("Player cant play a cassette right now");
                                                                                            return;
                                                                                        }

                                                                                        const cassette = cassetteResults[0].cassette_id;
                                                                                        const cassette_hazard_duration = 3

                                                                                        console.log("player will play cassette number:", cassette);

                                                                                        if (cassette == 3){
                                                                                            connection.execute('UPDATE boardmatch SET tile_type_id = ?, hazard_duration = ? WHERE tile_id = ? OR tile_id = ?',
                                                                                                [cassette + 1, cassette_hazard_duration + 3, tile_id],
                                                                                                function(err, results, fields) {
                                                                                                    if (err){
                                                                                                        res.send(err);
                                                                                                    } else {
                                                                                                        console.log("player played cassette number:", cassette);
                                                                                                    }

                                                                                                }

                                                                                            );

                                                                                        } else if (cassette < 3) {
                                    
                                                                                            connection.execute('UPDATE boardmatch SET tile_type_id = ?, hazard_duration = ? WHERE tile_id = ?',
                                                                                                [cassette + 1, cassette_hazard_duration, tile_id],
                                                                                                function(err, results, fields) {
                                                                                                    if (err){
                                                                                                        res.send(err);
                                                                                                    } else {
                                                                                                        console.log("player played cassette number:", cassette);
                                                                                                    }

                                                                                                }

                                                                                            );
                                    
                                                                                        }

                                                                                        connection.execute('UPDATE playermatch SET has_used_a_cassette = TRUE WHERE player_id = ?',
                                                                                            [player_id],
                                                                                            function(err, results, fields) {
                                                                                                if (err){
                                                                                                    res.send(err);
                                                                                                } else {
                                                                                                    console.log("player played a cassette");
                                                                                                }

                                                                                            }

                                                                                        );

                                                                                        connection.execute('UPDATE playermatchcassette SET cassette_id = 0 WHERE player_id = ? AND player_cassette_id = ?',
                                                                                            [player_id, player_cassette_id],
                                                                                            function(err, results, fields) {
                                                                                                if (err){
                                                                                                    res.send(err);
                                                                                                } else {
                                                                                                    console.log("the cassette the player used got deleted");
                                                                                                };

                                                                                            }

                                                                                        );

                                                                                    });

                                                                                }

                                                                                if (playertarget_id == playerResults[0].player_id || playertarget_id == playerResults[1].player_id) {

                                                                                    console.log("player selected is correct");

                                                                                    connection.execute("SELECT * FROM playermatch WHERE player_id = ?", [player_id], (err, results) => {
                                                                                        if (err) {
                                                                                            console.error("Error checking if player has moved", err);
                                                                                            res.status(500).send("Error checking if player has moved");
                                                                                            return;
                                                                                        }

                                                                                        if (results[0].cassettes_broken || results[0].random_cassettes_optained) {
                                                                                            console.log("Player cant play a cassette right now");
                                                                                            res.status(403).send("Player cant play a cassette right now");
                                                                                            return;
                                                                                        }

                                                                                        const cassette = cassetteResults[0].cassette_id;

                                                                                        if (cassette == 4) {

                                                                                            connection.execute('UPDATE playermatch SET is_stoped = TRUE WHERE player_id = ?',
                                                                                                [playertarget_id],
                                                                                                function(err, results, fields) {
                                                                                                    if (err){
                                                                                                        res.send(err);
                                                                                                    } else {
                                                                                                        console.log("player played cassette number:", cassette);
                                                                                                    }
    
                                                                                                }
    
                                                                                            );
    
                                                                                        } else if (cassette == 5) {
    
                                                                                            connection.execute('UPDATE playermatch SET cassettes_broken = TRUE WHERE player_id = ?',
                                                                                                [playertarget_id],
                                                                                                function(err, results, fields) {
                                                                                                    if (err){
                                                                                                        res.send(err);
                                                                                                    } else {
                                                                                                        console.log("player played cassette number:", cassette);
                                                                                                    }
    
                                                                                                }
    
                                                                                            );
    
                                                                                        } else if (cassette == 6) {

                                                                                            connection.execute('SELECT tile_type_id FROM boardmatch WHERE tile_id = ?',
                                                                                                [tile_id],
                                                                                                function (err, results, fields) {
                                                                                                    if (err) {
                                                                                                        console.log("Error checking if the tile where the player wants to go is taken by a meteor", err);
                                                                                                    } else {
                                                                                                        console.log(results[0].tile_type_id);
                                                                                                        if (results[0].tile_type_id != 2) {
                                                                                                            console.log("player can move to this tile because theres no meteor");

                                                                                                            if (results[0].tile_type_id == 3) {
                                                                                                                connection.execute('UPDATE playermatch SET player_hazard_duration = player_hazard_duration + 1 WHERE player_id = ?',
                                                                                                                    [player_id],
                                                                                                                    function (err, results, fields) {
                                                                                                                        if (err) {
                                                                                                                            console.log("Error updating player_hazard_duration", err);
                                                                                                                        } else {
                                                                                                                            console.log("Updated player_hazard_duration in blackhole tile");
                                                                                                                        }
                                                                                                                    }
                                                                                                                )
                                                                                                            }

                                                                                                            connection.execute('SELECT tile_id FROM playermatch WHERE player_id = ?', [player_id], (err, playermatchResults, fields) =>{
                                                                                                                if (err) {
                                                                                                                    console.error("Error getting tile_id", err);
                                                                                                                    res.status(500).send("Error getting tile_id");
                                                                                                                    return;
                                                                                                                }
                                                                                                        
                                                                                                                const player_tile_id = playermatchResults[0].tile_id;

                                                                                                                if (
                                                                                                                    player_tile_id + 1 == tile_id && player_tile_id !== 5 && player_tile_id !== 10 && player_tile_id !== 15 && player_tile_id !== 20 && player_tile_id !== 25 ||
                                                                                                                    player_tile_id - 1 == tile_id && player_tile_id !== 1 && player_tile_id !== 6 && player_tile_id !== 11 && player_tile_id !== 16 && player_tile_id !== 21 ||
                                                                                                                    player_tile_id + 5 == tile_id && player_tile_id !== 21 && player_tile_id !== 22 && player_tile_id !== 23 && player_tile_id !== 24 && player_tile_id !== 25 ||
                                                                                                                    player_tile_id - 5 == tile_id && player_tile_id !== 1 && player_tile_id !== 2 && player_tile_id !== 3 && player_tile_id !== 4 && player_tile_id !== 5
                                                                                                                ) {
                                                                                                                    connection.execute("SELECT * FROM playermatch WHERE player_id = ?", [player_id], (err, results) => {
                                                                                                                        if (err) {
                                                                                                                            console.error("Error checking if player has moved", err);
                                                                                                                            res.status(500).send("Error checking if player has moved");
                                                                                                                            return;
                                                                                                                        }
                        
                                                                                                                        if (results[0].is_stoped) {
                                                                                                                            console.log("Player has already moved in this turn");
                                                                                                                            res.status(403).send("Player has already moved in this turn");
                                                                                                                            return;
                                                                                                                        }
                        
                                                                                                                        connection.execute('UPDATE playermatch SET tile_id = ? WHERE player_id = ?',
                                                                                                                            [tile_id, playertarget_id],
                                                                                                                            function (err, results, fields) {
                                                                                                                                if (err) {
                                                                                                                                    console.log("Error updating player's tile_id", err);
                                                                                                                                } else {
                                                                                                                                    console.log("Player moved to", tile_id);
                                                                                                                                };
                                                                                                                            }
                                                                                                                        );  
                        
                                                                                                                    });
                        
                                                                                                                }

                                                                                                            })

                                                                                                        } else {
                                                                                                            console.log("player cant move to this tile because theres a meteor");
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            )
                                                                                        }
    
                                                                                        connection.execute('UPDATE playermatch SET has_used_a_cassette = TRUE WHERE player_id = ?',
                                                                                            [player_id],
                                                                                            function(err, results, fields) {
                                                                                                if (err){
                                                                                                    res.send(err);
                                                                                                } else {
                                                                                                    console.log("player played a cassette");
                                                                                                }
    
                                                                                            }
    
                                                                                        );
    
                                                                                        connection.execute('UPDATE playermatchcassette SET cassette_id = 0 WHERE player_id = ? AND player_cassette_id = ?',
                                                                                            [player_id, player_cassette_id],
                                                                                            function(err, results, fields) {
                                                                                                if (err){
                                                                                                    res.send(err);
                                                                                                } else {
                                                                                                    console.log("the cassette the player used got deleted");
                                                                                                };
    
                                                                                            }
    
                                                                                        );

                                                                                    });

                                                                                } else {

                                                                                    console.log("player selected is not correct");
                                                                                    
                                                                                }

                                                                            }
                                                                        }
                                                                    )

                                                                } else {

                                                                    console.log("this tile already has a hazard choose another tile");

                                                                }

                                                            }
                                                        }
                                                    )

                                                };

                                            }
                                        );

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