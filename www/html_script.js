// const { response } = require("express");

var player_1_tileID=1
var player_2_tileID=2


  // function movePlayer(direction) {
       
    //     var newPosition;
    //     if (direction === "up" && playerPosition > 5) {
    //         newPosition = playerPosition - 5;
    //     } else if (direction === "down" && playerPosition < 21) {
    //         newPosition = playerPosition + 5;
    //     } else if (direction === "left" && playerPosition % 5 !== 1) {
    //         newPosition = playerPosition - 1;
    //     } else if (direction === "right" && playerPosition % 5 !== 0) {
    //         newPosition = playerPosition + 1;
    //     } else {
            
    //         return;
    //     }
    //     document.getElementById(`cell-${playerPosition}`).innerText = '';
    //     playerPosition = newPosition;
    //     document.getElementById(`cell-${playerPosition}`).innerText = 'Player';
    // }




// const { response } = require("express");


// function moveUP() {
//     function fetchDataFromServer() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 var epta = JSON.parse(this.responseText);
//                 console.log("Полученные данные с сервера:", epta);
//                 }

//                 // updating tile_id
//                 var currentTileID = epta + 1;

//                 // Sending data to the server
//                 var data = {
//                     "player_id": 1,
//                     "tile_id": currentTileID
//                 };
//                 var xhttp = new XMLHttpRequest();
//                 xhttp.onreadystatechange = function() {
//                     if (this.readyState == 4) {
//                         console.log(this.responseText);
//                     }
//                 }
//                 var jsonData = JSON.stringify(data);
//                 xhttp.open("POST", "/movement2");
//                 xhttp.setRequestHeader("Content-Type", "application/json");
//                 console.log(jsonData);
//                 xhttp.send(jsonData);
//         };

//         xhttp.open("GET", "/tile_id_data", true);
//         xhttp.send(tile_id);
//     }

    
//     fetchDataFromServer();
// }
// function moveUP() {
//     function fetchDataFromServer() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 var DBresponse = JSON.parse(this.responseText);
//                 console.log("data from the server: ", DBresponse);
                
//                 // updating tile_id
//                 var currentTileID = DBresponse - 5; 
                
//                 // Sending data to the server
//                 var data = {
//                     "player_id": 1,
//                     "tile_id": currentTileID
//                 };
//                 var xhttp = new XMLHttpRequest();
//                 xhttp.onreadystatechange = function() {
//                     if (this.readyState == 4) {
//                         console.log(this.responseText);
//                     }
//                 }
//                 var jsonData = JSON.stringify(data);
//                 xhttp.open("POST", "/movement2");
//                 xhttp.setRequestHeader("Content-Type", "application/json");
//                 console.log(jsonData);
//                 xhttp.send(jsonData);
//             }
//         };

//         xhttp.open("GET", "/tile_id_data/1", true);
//         xhttp.send();
        
//     }

//     fetchDataFromServer();
// }

// function moveDOWN() {
//     function fetchDataFromServer() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 var DBresponse = JSON.parse(this.responseText);
//                 console.log("data from the server: ", DBresponse);
                
//                 // updating tile_id
//                 var currentTileID = DBresponse + 5; 

//                 // Sending data to the server
//                 var data = {
//                     "player_id": 1,
//                     "tile_id": currentTileID
//                 };
//                 var xhttp = new XMLHttpRequest();
//                 xhttp.onreadystatechange = function() {
//                     if (this.readyState == 4) {
//                         console.log(this.responseText);
//                     }
//                 }
//                 var jsonData = JSON.stringify(data);
//                 xhttp.open("POST", "/movement2");
//                 xhttp.setRequestHeader("Content-Type", "application/json");
//                 console.log(jsonData);
//                 xhttp.send(jsonData);
//             }
//         };

//         xhttp.open("GET", "/tile_id_data/1", true);
//         xhttp.send();
        
//     }

//     fetchDataFromServer();
// }

// function moveLEFT() {
//     function fetchDataFromServer() {
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 var DBresponse = JSON.parse(this.responseText);
//                 console.log("data from the server: ", DBresponse);
                
//                 if (DBresponse>0){
//                 // updating tile_id
//                 var currentTileID = DBresponse - 1; 

//                 // Sending data to the server
//                 var data = {
//                     "player_id": 1,
//                     "tile_id": currentTileID
//                 };
//                 var xhttp = new XMLHttpRequest();
//                 xhttp.onreadystatechange = function() {
//                     if (this.readyState == 4) {
//                         console.log(this.responseText);
//                     }
//                 }
//                 var jsonData = JSON.stringify(data);
//                 xhttp.open("POST", "/movement2");
//                 xhttp.setRequestHeader("Content-Type", "application/json");
//                 console.log(jsonData);
//                 xhttp.send(jsonData);
//             }}
//         };

//         xhttp.open("GET", "/tile_id_data/1", true);
//         xhttp.send();
        
//     }

//     fetchDataFromServer();
// }
// function moveRIGHT() {
//     const cellId = parseInt(document.getElementById('playerID').value) - 1;
//     const cell = document.getElementById(`cell-${cellId}`);
//     const newCellId = cellId + 1; // Move right one cell
  
//     // Make an XMLHttpRequest to the /movement2 endpoint to update the player's position in the database
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', '/movement2', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onreadystatechange = function() {
//       if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         if (response.success) {
//           // Update the player's position on the HTML page
//           const newCell = document.getElementById(`cell-${newCellId}`);
//           if (newCell) {
//             cell.innerText = '';
//             newCell.innerText = 'Player';
//             document.getElementById('playerID').value = newCellId + 1;
//           }
//         } else {
//           // Handle error response
//           console.error(response.message);
//         }
//       }
//     };
//     xhr.send(JSON.stringify({ direction: 'right', tileId: cellId }));
//   }

function cleanBoard(){
    console.log("Updating board...");

    for (i = 1; i < 26; i++) {
        var tile = document.getElementById(i);
        tile.innerText = '';
    }

}

function getPlayerPosition(playerID){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonData = JSON.parse(this.responseText);
            var tile = document.getElementById(jsonData);
            if (tile) {
                tile.innerText = 'Player';
            }
        }
    };
    xhttp.open("GET", "/tile_id_data/" + playerID, true);
    xhttp.send();
}

function move(direction) {
    var playerID = document.getElementById("playerID").value;
    if (!playerID)
        {
            console.log("Define the playerID in the input field!");
            return;
        }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.responseText)
        if (this.readyState == 4 && this.status == 200) {
                cleanBoard();
                getPlayerPosition(1);
        }
    };

    var player_new_tile = player_1_tileID + 1;
    var data = {
        "player_id": playerID,
        "move": direction,
        };
    var jsonData = JSON.stringify(data);
    xhttp.open("POST", "/movement2");
    xhttp.setRequestHeader("Content-Type", "application/json");
    console.log(jsonData);
    xhttp.send(jsonData);
}


function EndTurn() {
    var playerID = document.getElementById("playerID").value;
    if (!playerID)
        {
            console.log("Define the playerID in the input field!");
            return;
        }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                console.log("Request successful");
            } else {
                console.error("Request failed with status: " + this.responseText);
            }
        }
    };

    xhttp.open("put", "/endturn", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    var data = {
        "match_id": 1,
        "player_id": playerID
    };
    var jsonData = JSON.stringify(data);
    console.log("jsonData");
    xhttp.send(jsonData); 
}
            
            
            



function getID()        {
    var playerID = document.getElementById('playerID').value; 
    var data = { "player_id": playerID };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("ID successfully sent!");
        }
    };
    xhttp.open("POST", "/movement2", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data)); // Отправляем данные на сервер
       
};


cleanBoard();
getPlayerPosition(1);




    
  


