document.getElementById('get-standings').addEventListener('click', getStandings);
document.getElementById('plyr-search').addEventListener('click', getPlayer);
document.getElementById('clr-srch').addEventListener('click', clearPlayer)

function getPlayer(){
    
    fetch("https://golf-leaderboard-data.p.rapidapi.com/world-rankings", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "golf-leaderboard-data.p.rapidapi.com",
            "x-rapidapi-key": "1246bd3c21msh45d9f5f62471e6ap1a1ca8jsn7a103cff6865"
        }
    })
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i <= 1300; i++){
            var selectedPlayer = document.querySelector('input').value;
            var currPlayer = (data.results.rankings[i].player_name);
            if (selectedPlayer == currPlayer) {
                document.getElementById(`plyr-rank-0`).innerHTML = (data.results.rankings[i].position);
                document.getElementById(`plyr-name-0`).innerHTML = (data.results.rankings[i].player_name);
                document.getElementById(`plyr-total-points-0`).innerHTML = (data.results.rankings[i].total_points);
                document.getElementById(`plyr-avg-total-points-0`).innerHTML = (data.results.rankings[i].avg_points);
                document.getElementById(`plyr-total-points-gained-0`).innerHTML = (data.results.rankings[i].points_gained);
                document.getElementById(`plyr-total-points-lost-0`).innerHTML = (data.results.rankings[i].points_lost);
      
                
            } else {
                currPlayer += (data.results.rankings[i].player_name);
            }
        }
    })
    
    .catch(err => {
        console.error(err);
    });
}

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

function clearPlayer(){

    
    document.getElementById(`plyr-rank-0`).innerHTML = " ";
    document.getElementById(`plyr-name-0`).innerHTML = " ";
    document.getElementById(`plyr-total-points-0`).innerHTML = " ";
    document.getElementById(`plyr-avg-total-points-0`).innerHTML = " ";
    document.getElementById(`plyr-total-points-gained-0`).innerHTML = " ";
    document.getElementById(`plyr-total-points-lost-0`).innerHTML = " ";
    
}

function clearSearch() {
    document.getElementsByClassName('clr-search').value = " ";
}



