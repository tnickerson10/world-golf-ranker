/* BUTTON ACTIONS */

document.getElementById('get-standings').addEventListener('click', getStandings);
document.getElementById('plyr-search').addEventListener('click', getPlayer);
document.getElementById('clr-srch').addEventListener('click', clearPlayer)

/*GET PLAYER DATA */
function getPlayer(){
    
    // uses rapidAPI to access data using fetch
    fetch("https://golf-leaderboard-data.p.rapidapi.com/world-rankings", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "golf-leaderboard-data.p.rapidapi.com",
            "x-rapidapi-key": "1246bd3c21msh45d9f5f62471e6ap1a1ca8jsn7a103cff6865"
        }
    })

    // parsing into JSON
    .then(response => response.json())
    .then(data => {
        
        // iterating over top 1300 golfers
        for (var j = 0; j <= 1300; j++){

            // handling user input if its is lowercase so API can read it 
            var selectedPlayer = document.querySelector('input').value;
            var splitPlayer = selectedPlayer.split(" ");

            for (var i = 0; i < splitPlayer.length; i++) {
                splitPlayer[i] = splitPlayer[i].charAt(0).toUpperCase() + splitPlayer[i].slice(1);

            }

            var capitalPlayer = splitPlayer.join(" ");
            
            var currPlayer = (data.results.rankings[j].player_name);

            // checks if user input matches a golfer and then fills in table data
            if (capitalPlayer == currPlayer) {
                document.getElementById(`plyr-rank-0`).innerHTML = (data.results.rankings[j].position);
                document.getElementById(`plyr-name-0`).innerHTML = (data.results.rankings[j].player_name);
                document.getElementById(`plyr-total-points-0`).innerHTML = (data.results.rankings[j].total_points);
                document.getElementById(`plyr-avg-total-points-0`).innerHTML = (data.results.rankings[j].avg_points);
                document.getElementById(`plyr-total-points-gained-0`).innerHTML = (data.results.rankings[j].points_gained);
                document.getElementById(`plyr-total-points-lost-0`).innerHTML = (data.results.rankings[j].points_lost);
      
                
            } else {
                currPlayer += (data.results.rankings[j].player_name);
            }
        }
    })
    
    .catch(err => {
        console.error(err);
    });
}

/*GET TOP 10 STANDINGS */

// uses rapidAPI to access data using fetch
function getStandings(){
    fetch("https://golf-leaderboard-data.p.rapidapi.com/world-rankings", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "golf-leaderboard-data.p.rapidapi.com",
            "x-rapidapi-key": "1246bd3c21msh45d9f5f62471e6ap1a1ca8jsn7a103cff6865"
        }
    })
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i <= 10; i++){
            
            document.getElementById(`name-${i}`).innerHTML = (data.results.rankings[i].player_name);
            document.getElementById(`total-points-${i}`).innerHTML = (data.results.rankings[i].total_points);
            document.getElementById(`avg-points-${i}`).innerHTML = (data.results.rankings[i].avg_points);
            document.getElementById(`points-gained-${i}`).innerHTML = (data.results.rankings[i].points_gained);
            document.getElementById(`points-lost-${i}`).innerHTML = (data.results.rankings[i].points_lost);
        }
    })
    
    .catch(err => {
        console.error(err);
    });
}

/*CLEARING PLAYER SEARCH */
function clearPlayer(){

    document.getElementById(`plyr-rank-0`).innerHTML = " ";
    document.getElementById(`plyr-name-0`).innerHTML = " ";
    document.getElementById(`plyr-total-points-0`).innerHTML = " ";
    document.getElementById(`plyr-avg-total-points-0`).innerHTML = " ";
    document.getElementById(`plyr-total-points-gained-0`).innerHTML = " ";
    document.getElementById(`plyr-total-points-lost-0`).innerHTML = " ";
    
}

/*CLEARING PLAYER SEARCH VALUE*/
function clearSearch() {
    document.getElementsByClassName('clr-search').value = " ";
}



