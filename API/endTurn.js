const express = require('express');
const router = express.Router();
const connection = require('../database');

router.put("/endturn", (req, res) => {
    console.log("endpoint=endturn");
    var match_id = req.body.match_id;
    playerID = req.session.playerID;
    connection.execute('UPDATE playermatch SET has_moved = FALSE, has_used_a_cassette = FALSE, random_cassettes_optained = FALSE WHERE playermatch_match_id = ?', [match_id], (err, results) => {
        if (err) {
            console.error("Error resetting has_moved to 0", err);
            res.status(500).send("Error resetting has_moved");
        } else {
            console.log("has_moved value reset for all players");
            res.status(200).send("Turn ended successfully. has_moved value reset for all players.");
        }
    });


    connection.execute('UPDATE gamematch SET match_turn = match_turn + 1 WHERE match_id = ?',
        [match_id],
        function (err, results, fields) {
            if (err) {
                res.send(err);
            } else {
                console.log("match turn incremented");
                connection.execute('UPDATE boardmatch SET hazard_duration = hazard_duration - 1 WHERE tile_type_id > 1 AND match_id = ?',
                    [match_id],
                    function (err, results, fields) {
                        if (err) {
                            res.send(err);
                        } else {
                            console.log("hazards life span was reduced");
                        }
                    }
                )

                connection.execute('UPDATE boardmatch SET tile_type_id = 1 WHERE tile_type_id > 1 AND hazard_duration = 0 AND match_id = ?',
                    [match_id],
                    function (err, results, fields) {
                        if (err) {
                            res.send(err);
                        } else {
                            console.log("hazards desapeared from the board");
                        }
                    }
                )
            }
        }
    )

    connection.execute('SELECT match_state_id FROM gamematch WHERE match_id = ?',
        [match_id],
        function (err, results, fields) {
            if (err) {
                console.error("Error getting the match_state_id", err);
            } else {
                
                if (results[0].match_state_id == 1) {

                    connection.execute('SELECT * FROM playermatch WHERE playermatch_match_id = ?',
                        [match_id],
                        function (err, playerResults, fields) {
                            if (err) {

                            } else {

                                if (playerResults[1].player_hazard_duration > 0) {
                                    console.log("player 2 cant play next turn because it is affected by a hazard");

                                    connection.execute('UPDATE gamematch SET match_turn = match_turn + 1 WHERE match_id = ?',
                                        [match_id],
                                        function (err, results, fields) {
                                            if (err) {
                                                res.send(err);
                                            } else {
                                                console.log("match turn incremented");
                                                connection.execute('UPDATE boardmatch SET hazard_duration = hazard_duration - 1 WHERE tile_type_id > 1 AND match_id = ?',
                                                    [match_id],
                                                    function (err, results, fields) {
                                                        if (err) {
                                                            res.send(err);
                                                        } else {
                                                            console.log("hazards life span was reduced");
                                                        }
                                                    }
                                                )

                                                connection.execute('UPDATE boardmatch SET tile_type_id = 1 WHERE tile_type_id > 1 AND hazard_duration = 0 AND match_id = ?',
                                                    [match_id],
                                                    function (err, results, fields) {
                                                        if (err) {
                                                            res.send(err);
                                                        } else {
                                                            console.log("hazards desapeared from the board");
                                                        }
                                                    }
                                                )

                                                connection.execute('UPDATE playermatch SET player_hazard_duration = player_hazard_duration - 1 WHERE player_id = ?',
                                                    [playerResults[1].player_id],
                                                    function (err, results, fields) {
                                                        if (err) {
                                                            res.send(err);
                                                        } else {
                                                            console.log("hazard duration decreased by 1");
                                                        }
                                                    }
                                                )
                                            }
                                        }
                                    )
                                } else {

                                    connection.execute('UPDATE gamematch SET match_state_id = 2 WHERE match_id = ?',
                                        [match_id],
                                        function (err, results, fields) {
                                            if (err) {
                                                console.error("Error setting the match_state_id to 2", err);
                                            } else {
                                                console.log("match_state_id set to 2");
                                            }
                                        }
                                    )
                                }

                                connection.execute('UPDATE playermatch SET is_stoped = FALSE, cassettes_broken = FALSE WHERE playermatch_match_id = ? AND player_id = ?',
                                    [match_id, playerResults[0].player_id],
                                    function (err, results, fields) {
                                        if (err) {
                                            console.error("Error setting the is_stoped and cassettes_broken to false", err);
                                        } else {
                                            console.log("is_stoped and cassettes_broken set to false");
                                        }
                                    }
                                )
                            }
                        }
                    )

                } else if (results[0].match_state_id == 2) {

                    connection.execute('SELECT * FROM playermatch WHERE playermatch_match_id = ?',
                        [match_id],
                        function (err, playerResults, fields) {
                            if (err) {

                            } else {

                                if (playerResults[0].player_hazard_duration > 0) {
                                    console.log("player 1 cant play next turn because it is affected by a hazard");

                                    connection.execute('UPDATE gamematch SET match_turn = match_turn + 1 WHERE match_id = ?',
                                        [match_id],
                                        function (err, results, fields) {
                                            if (err) {
                                                res.send(err);
                                            } else {
                                                console.log("match turn incremented");
                                                connection.execute('UPDATE boardmatch SET hazard_duration = hazard_duration - 1 WHERE tile_type_id > 1 AND match_id = ?',
                                                    [match_id],
                                                    function (err, results, fields) {
                                                        if (err) {
                                                            res.send(err);
                                                        } else {
                                                            console.log("hazards life span was reduced");
                                                        }
                                                    }
                                                )

                                                connection.execute('UPDATE boardmatch SET tile_type_id = 1 WHERE tile_type_id > 1 AND hazard_duration = 0 AND match_id = ?',
                                                    [match_id],
                                                    function (err, results, fields) {
                                                        if (err) {
                                                            res.send(err);
                                                        } else {
                                                            console.log("hazards desapeared from the board");
                                                        }
                                                    }
                                                )

                                                connection.execute('UPDATE playermatch SET player_hazard_duration = player_hazard_duration - 1 WHERE player_id = ?',
                                                    [playerResults[0].player_id],
                                                    function (err, results, fields) {
                                                        if (err) {
                                                            res.send(err);
                                                        } else {
                                                            console.log("hazard duration decreased by 1");
                                                        }
                                                    }
                                                )
                                            }
                                        }
                                    )
                                } else {

                                    connection.execute('UPDATE gamematch SET match_state_id = 1 WHERE match_id = ?',
                                        [match_id],
                                        function (err, results, fields) {
                                            if (err) {
                                                console.error("Error setting the match_state_id to 1", err);
                                            } else {
                                                console.log("match_state_id set to 1");
                                            }
                                        }
                                    )
                                }

                                connection.execute('UPDATE playermatch SET is_stoped = FALSE, cassettes_broken = FALSE WHERE playermatch_match_id = ? AND player_id = ?',
                                    [match_id, playerResults[1].player_id],
                                    function (err, results, fields) {
                                        if (err) {
                                            console.error("Error setting the is_stoped and cassettes_broken to false", err);
                                        } else {
                                            console.log("is_stoped and cassettes_broken set to false");
                                        }
                                    }
                                )
                            }
                        }
                    )
                }
            }
        }
    )

});

module.exports = router;