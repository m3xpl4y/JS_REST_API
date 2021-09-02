let urlTeams = "https://api.football-data.org/v2/competitions/2002/teams"

fetch(urlTeams, {
    method: "GET",
    headers: {
        "x-auth-token": "e55fd5458fb54892ae0bd92659f71457"
    }
})
.then(function (response){
    return response.json();
})
.then(function(data){
    let html ="";
    data.teams.forEach(element => {
        html += "<li><img src='" + element.crestUrl + "'/>" + element.name +"</li>";
    });
    document.getElementById("teams").innerHTML = html;
})
.catch(function (err){
    console.log(err);
});