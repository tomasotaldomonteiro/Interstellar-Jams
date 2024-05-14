const express = require ('express');
const app = express();
const mysql = require("mysql2");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require('path');

// This is the host connection (and not localhost!!)
const connection = mysql.createConnection({
    host: 't32.h.filess.io',
    port: 3307,
    user: 'Interstellarjams_timesoonif', 
    password: 'ac67029e7f39d25d3d2add03528516d9c5a448d2', 
    database: 'Interstellarjams_timesoonif'
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('www'));
app.use(express.json())

connection.connect((err) => {
    if (err){
        console.log("Erro a connectar a base de dados: " + err);
        return;
    }
    console.log("connectado á base de dados");
});

app.get("/tile_id_data/:player_id", (req, res) => {
    playerID = req.params.player_id
    connection.execute('SELECT tile_id FROM playermatch WHERE player_id = ?', [playerID], (err,result) => {
        if (err) {
            console.error("Error getting tile_id", err);
            res.status(500).send("Error getting tile_id");
            return;
        } else {
            res.json(result[0].tile_id)
        
    }
}); 
})


app.post('/NewPlayer', (request, response) => {
    var playername = request.body.playername;
    console.log(playername)
    if (!playername){
        response.send("falta dados");
        return;
    }

    connection.execute('SELECT * FROM player where player_name = ?',
        [playername],
        function (err, results, fields) {
            // Check if the results length is greater than 0
            if (results.length == 0){
                // If its 0 then we don't have any username with that name in the DB
                createAccount(request, response, playername);
            }else{
                // If different of 0 (> 0), means we have a username with that name!
                response.send("este nome ja foi escolhido");
            }
        });
});

function createAccount(request, response, playername){
    connection.execute('INSERT INTO player (player_name, player_wins, player_matches) VALUES (?, 0, 0)',
        [playername],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                response.send("Conta criada - " + playername);
            }
        });
}

app.post('/createMatch', (request, response) => {
    var playerID = request.body.playerID;

    if (!playerID){
        response.send("playerID is not set.");
        return;
    }

    connection.execute('INSERT INTO gamematch (match_state_id, player_id, match_id, match_turn, match_map_id) VALUES (?,?,0,0,0)',
        [1, playerID],
        function (err, results, fields) {
            if (err){
                response.send(err);
            }else{
                var Gamematch_id = results.insertId;

                connection.execute('INSERT INTO  playermatch (player_id, match_id , tile_id, player_match_idle_turns, player_cassette_id) VALUES (?,?,0,0,0)',
                [playerID, Gamematch_id],
                function (err, results, fields) {
                    if (err){
                        response.send("Erro no insert");
                    }else{
                        // ❗ At the moment we are returning text but we could send a JSON with the playerID and match_id!!! 
                        response.send("Match created. player_id: " + playerID + " and match_id: " + Gamematch_id);
                    }
                });
            }
        });
});



app.post("/getRandomCassette", (req, res) => {
    console.log("endpoint=getRandomCassette");

    var player_id = req.body.player_id;

    function CheckPlayerTurn(){
        connection.execute('select * from gamematch WHERE match_id = 1', [], (err, results) => {
            if (err) {
                console.error("Error getting current_player", err);
                res.send(err);
            } else {
                current_player = results[0].current_player;

                // Check if its player turn
                if (player_id == current_player)
                    {
                        // my turn. time to play.
                        UPDATEHAND();
                    }else{
                        res.send("1. Not your turn.");
                    }

            }
        });
    }

    function UPDATEHAND(){
        connection.execute('SELECT * FROM cassette',
        [],
        function (err, results, fields) {
            if (err) {
                res.send(err);
            } else {
                console.log(results);
                randomValue = Math.floor(Math.random() * results.length);
                console.log("random: " + randomValue);
                var cassette = results[randomValue];
                console.log(cassette.cassette_id);
                console.log(player_id);

                connection.execute('UPDATE playermatchcassette SET cassette_id = ? WHERE player_id = ? AND player_cassette_id = ?;',
                    [cassette.cassette_id, player_id, 1], 
                    function (err, results, fields) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send("Cassette updated in the player's hand");
                        }
                    });
            }
        });  
    }

    CheckPlayerTurn();
}); 

    

app.post("/UseHazardCassette", (req, res) => {
    console.log("endpoint=UseHazardCassette");
    var player_id = req.body.player_id;
    var tile_id = req.body.tile_id;
    var tile_id2 = req.body.tile_id2;

    function CheckPlayerTurn(){
        connection.execute('select * from gamematch WHERE match_id = 1', [], (err, results) => {
            if (err) {
                console.error("Error getting current_player", err);
                res.send(err);
            } else {
                current_player = results[0].current_player;

                // Check if its player turn
                if (player_id == current_player)
                    {
                        // my turn. time to play.
                        UPDATEHAZARD();
                    }else{
                        res.send("2. Not your turn.");
                    }

            }
        });
    }

    function UPDATEHAZARD(){
        console.log(`1Updating tile at position (${tile_id}`);

    connection.execute('SELECT * FROM playermatchcassette WHERE player_id = ?',
        [player_id],
        function (err, cassetteResults, fields) {
            if (err) {
                res.send(err);
            } else {
                const cassette_id = cassetteResults.map(result => result.cassette_id);
                const matchingCassettes = cassette_id.filter(id => id >= 1 && id <= 3);
                const selectedCassette = matchingCassettes[0];
                console.log(`2Updating tile at position (${tile_id}`);

                if (matchingCassettes.length > 0) {
                    connection.execute('SELECT * FROM boardmatch WHERE tile_id = ?',
                        [tile_id],
                        function (err, boardResults, fields) {
                            if (err) {
                                res.send(err);
                            } else {
                                const board = boardResults[0]; 
                                console.log(`3Updating tile at position (${tile_id}`);
                                console.log("Selected Cassette:", selectedCassette);
                                //meteor//
                                if (selectedCassette === 1) {
                                    connection.execute('UPDATE boardmatch SET tile_type_id = 2, hazard_duration = 0 WHERE tile_id = ?',
                                        [tile_id],
                                        function (err, updateResults, fields) {
                                            if (err) {
                                                console.error("Error updating tile type:", err);
                                            } else {
                                                console.log("Tile type updated successfully.");
                                                connection.execute('UPDATE playermatchcassette SET cassette_id = 0',
                                                [player_id],
                                                function (err, deleteResults, fields) {
                                                    if (err) {
                                                        console.error("Error deleting hazard cassette:", err);
                                                    } else {
                                                        console.log("Hazard cassette deleted from player's hand.");
                                                    }
                                                });
                                            }
                                        });
                                } else {
                                    connection.execute('UPDATE boardmatch SET tile_type_id = ? WHERE tile_id = ?',
                                        [selectedCassette + 1, tile_id],
                                        function (err, updateResults, fields) {
                                            if (err) {
                                                console.error("Error updating tile type:", err);
                                            } else {
                                                console.log("Tile type updated successfully.");
                                                connection.execute('UPDATE playermatchcassette SET cassette_id = 0',
                                                function (err, deleteResults, fields) {
                                                    if (err) {
                                                        console.error("Error deleting hazard cassette:", err);
                                                    } else {
                                                        console.log("Hazard cassette deleted from player's hand.");
                                                    }
                                                });
                                            }
                                        });
                                }
                                //blackhole//
                                if (selectedCassette === 2) {
                                    connection.execute('UPDATE boardmatch SET tile_type_id = 3, hazard_duration = 0 WHERE tile_id = ?',
                                        [tile_id],
                                        function (err, updateResults, fields) {
                                            if (err) {
                                                console.error("Error updating tile type:", err);
                                            } else {
                                                console.log("Tile type updated successfully.");
                                                connection.execute('UPDATE playermatchcassette SET cassette_id = 0',
                                                    function (err, deleteResults, fields) {
                                                        if (err) {
                                                            console.error("Error deleting hazard cassette:", err);
                                                        } else {
                                                            console.log("Hazard cassette deleted from player's hand.");
                                                        }
                                                    }
                                                )
                                            }
                                        }
                                    )
                                    if(selectedCassette === 3) {
                                    connection.execute('UPDATE boardmatch SET tile_type_id = 4, hazard_duration = 0 WHERE tile_id = ?',
                                        [tile_id2],
                                        function (err, updateResults, fields) {
                                            if (err) {
                                                console.error("Error updating tile typr:", err);
                                            } else {
                                                console.log("Tile type updated successfully.");
                                                connection.execute('UPDATE playermatchcassette SET cassette_id = 0',
                                                    function (err, deleteResults, fields) {
                                                        if (err) {
                                                            console.error("Error deleting hazard cassette:", err);
                                                        } else {
                                                            console.log("Hazard cassette deleted from player's hand.");
                                                        }
                                                    }
                                                )
                                            }
                                        }
                                    )}
                                }

                                res.send("tile updated");
                            }
                        }
                    );
                } else {
                    res.send("No Hazard cassettes on hand.");
                }
            }
        }
    );
    }

    CheckPlayerTurn();

});







    
   

app.post("/movement2", (req, res) => {
    var player_id = req.body.player_id;
    var movementDirection = req.body.move;
    var tile_id
    console.log("direction = " + movementDirection);

    function CheckPlayerTurn(){
        connection.execute('select * from gamematch WHERE match_id = 1', [], (err, results) => {
            if (err) {
                console.error("Error getting current_player", err);
                res.send(err);
            } else {
                current_player = results[0].current_player;

                // Check if its player turn
                if (player_id == current_player)  //current_player
                    {
                        // my turn. time to play.
                        UPDATEMOVEMENT();
                    }else{
                        res.send("3. Not your turn.");
                    }

            }
        });
    }

    function UPDATEMOVEMENT() {

        connection.execute("SELECT has_moved FROM playermatch WHERE player_id = ?", [player_id], (err, results) => {
            if (err) {
                console.error("Error checking if player has moved", err);
                res.status(500).send("Error checking if player has moved");
                return;
            }
            console.log("something "+results[0].has_moved)
            if (results[0].has_moved) {
                console.log("Player has already moved in this turn");
                res.status(403).send("Player has already moved in this turn");
                return;
            }
            
            if (!tile_id) {
            connection.execute("UPDATE playermatch SET player_match_idle_turns = player_match_idle_turns + 1 WHERE player_id = ?", [player_id], (err, results) => {
                if (err) {
                    console.error("Error updating idle_turn", err);
                    res.status(500).send("Error updating idle_turn");
                } else {
                    console.log("Idle turn updated");
                    res.status(200).send("Idle turn updated");
                }
            });
    
            } else {
            function getTileTypeId(tileId, callback) {
                connection.execute("SELECT tile_type_id FROM boardmatch WHERE tile_id = ?", [tileId], (err, result) => {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, result[0].tile_type_id);
                    }
                });
            }
    
            connection.execute('SELECT tile_id, player_hazard_duration FROM playermatch WHERE player_id = ?', [player_id], (err, playermatchResults, fields) => {
                if (err) {
                    console.error("Error getting tile_id", err);
                    res.status(500).send("Error getting tile_id");
                    return;
                }
    
                const player_tile_id = playermatchResults[0].tile_id;
                const player_hazard_duration = playermatchResults[0].player_hazard_duration;
    
                console.log("player_tile_id =", player_tile_id)
                console.log("player_hazard_duration =", player_hazard_duration)
    
                if (player_hazard_duration > 0) {
                    console.log("Player is currently stuck in a hazardous tile");
                    res.status(403).send("Player is currently stuck in a hazardous tile");
                    return;
                }
                console.log(player_tile_id,tile_id);
                    getTileTypeId(tile_id, (err, tileType) => {
                        if (err) {
                            console.error("Error retrieving tile type", err);
                            res.status(500).send("Error retrieving tile type");
                            return;
                        }
    
                        console.log("Tile type id:", tileType);
    
                        if (tileType == 2) {
                            res.status(403).send("Cannot move to a tile with tile_type_id 2");
                            return;
                        }
                            console.log("ipdating "+tile_id)

                        var tileToMove = tile_id;
                        switch(movementDirection){
                            case "right":
                                tileToMove += 1;
                                break;
                            case "left":
                                tileToMove -= 1;
                                break;
                            case "up":
                                tileToMove -= 5;
                                break;
                            case "down":
                                tileToMove += 5;
                                break;
                            default:
                                console.log("Not a valid movement direction");
                                res.status(403).send("Not a valid movement direction");
                                return;
                        }

                        connection.execute('UPDATE playermatch SET tile_id = ?, has_moved = 1 WHERE player_id = ?', [tileToMove, player_id], (err, updateResult) => {
                            if (err) {
                                console.error("Error updating player's tile_id", err);
                                res.status(500).send("Error updating player's tile_id");
                                return;
                            }
                            console.log("Player moved to", tile_id);
                            res.send("Player moved successfully and has_moved value updated");
                        });
                    });
            });

        }
    })}

    function GetCurrentPlayerPosition(){
        connection.execute('SELECT tile_id FROM playermatch WHERE player_id = ?', [player_id], (err, results, fields) => {
            if (err) {
                console.error("Error getting tile_id", err);
                res.status(500).send("Error getting tile_id");
                return;
            }
        
            tile_id = results[0].tile_id;
            CheckPlayerTurn();
        });
    }

    GetCurrentPlayerPosition();
});
 

   
app.put("/endturn", (req, res) => {
    console.log("endpoint=endturn");
    var match_id = req.body.match_id;
    var player_id = req.body.player_id;
    var current_player;

    function CheckPlayerTurn(){
        connection.execute('select * from gamematch WHERE match_id = 1', [], (err, results) => {
            if (err) {
                console.error("Error getting current_player", err);
                res.send(err);
            } else {
                current_player = results[0].current_player;

                console.log("player_id(" + player_id + ")==current_player(" + current_player + ")", (player_id==current_player));
                // Check if its player turn
                if (player_id == current_player)
                    {
                        // my turn. time to play.
                        UpdateData();
                    }else{
                        res.send("4. Not your turn.");
                    }

            }
        });
    }

    function UpdateData(){
        
        console.log("results")
        connection.execute('UPDATE playermatch SET has_moved = 0 WHERE player_id = ?', [player_id], (err, results) => {
            if (err) {
                console.error("Error resetting has_moved to 0", err);
                res.status(500).send("Error resetting has_moved");
            }
            else{
                CheckData();
            }
        });

        connection.execute('UPDATE gamematch SET match_turn = match_turn + 1 WHERE match_id = ?;',
            [match_id],
            function (err, results, fields) {
                if (err) {
                    res.send(err);
                } else {
                    connection.execute('UPDATE boardmatch SET hazard_duration = hazard_duration + 1 WHERE tile_type_id = 3 OR tile_type_id = 2;',
                        [],
                        function (err, results, fields) {
                            if (err) {
                                res.status(500).send("Error updating hazard_duration:", err);
                            } else {
                                console.log("Hazard duration incremented successfully.");
                                connection.execute('UPDATE playermatch SET player_hazard_duration = 1 WHERE tile_id IN (SELECT tile_id FROM boardmatch WHERE tile_type_id = 3);',
                                    [],
                                    function (err, results, fields) {
                                        if (err) {
                                            res.status(500).send("Error setting player hazard duration:", err);
                                        } else {
                                            console.log("Player hazard duration set successfully.");
                                        }
                                    });
                                connection.execute('UPDATE boardmatch SET tile_type_id = 1 WHERE hazard_duration > 3;',
                                    [],
                                    function (err, results, fields) {
                                        if (err) {
                                            res.status(500).send("Error resetting tile type:", err);
                                        } else {
                                            console.log("tile reset");
                                        }
                                    });
                                    connection.execute('UPDATE boardmatch SET hazard_duration = 0 WHERE hazard_duration > 3;',
                                    [],
                                    function (err, results, fields) {
                                        if (err) {
                                            res.status(500).send("Error resetting hazard duration", err);
                                        } else {
                                            console.log("hazard desapeared");
                                        }
                                    });
                                    connection.execute('UPDATE playermatch SET player_hazard_duration = 0 WHERE player_hazard_duration > 0;',
                                    [],
                                    function (err, results, fields) {
                                        if (err) {
                                            res.status(500).send("Error resetting player hazard duration:", err);
                                        } else {
                                            console.log("Player hazard duration reset successfully.");
                                        }
                                    });
                            }
                        });
                    
                        ChangeTurn();
                }
            });
    }

    function ChangeTurn(){
        // Fazer select 'select * from playermatch WHERE match_id = 1;'
        connection.execute("select player_id from playermatch WHERE match_id = 1", [], (err, results, fields) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            if (results.length < 2){
                res.status(200).send("There should be 2 players inside this match."); 
                return;
            }

            var p1 = results[0].player_id;
            var p2 = results[1].player_id;
            var pToChange = p1 == current_player ? p2 : p1;

            connection.execute('UPDATE gamematch SET current_player = ? WHERE match_id = 1', [pToChange], (err, results, fields) => {
                if (err) {
                    // res.status(403).send(err);
                    console.log(err);
                    return;
                }
                CheckData();
                res.send("All done. Turn changed.");
            });
        });
    }

    CheckPlayerTurn();
});


app.listen(4444, () => {
    console.log('Server is laying on some port')
});

//http://localhost:4444/ 

function CheckData() {
    

connection.execute('SELECT * FROM playermatch WHERE player_id = 1', [], (err, playermatchResults, fields) => {
    if (err) {
        console.error("Error getting tile_id", err);
        res.status(500).send("Error getting tile_id");
        return;
    }

    console.log(playermatchResults);
});


connection.execute('select * from gamematch WHERE match_id = 1', [], (err, playermatchResults, fields) => {
    if (err) {
        console.error("Error getting tile_id", err);
        res.status(500).send("Error getting tile_id");
        return;
    }

    console.log(playermatchResults);
});

}

CheckData();