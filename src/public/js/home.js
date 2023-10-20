const API_URL = "https://api.football-data.org/v4/matches";

fetch(API_URL,{
    method: "GET",
    headers: {
        "X-Auth-Token": "b337f2e7aaa141f38ab6fd54909b7e44",
        // "Access-Control-Allow-Origin" : "http://localhost:8080",
        // 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        // "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    }
})
    .then(resp => resp.json())
    .then(data =>{
        console.log(data)
        console.log("hola")
    })
    .catch(error => console.log('Authorization failed : ' + error.message + error));

// fetch("https://api.thecatapi.com/v1/images/search")
//     .then(resp => resp.json())
//     .then(data =>{
//         console.log(data)
// })