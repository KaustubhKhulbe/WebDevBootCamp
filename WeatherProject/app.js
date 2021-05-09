const express = require("express");
const app = express()
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
     console.log("listening on port 3000");
})

app.get("/", function(req, res){
     res.sendFile(__dirname + "/index.html");
     // res.send("server is running");
})

app.post("/", function(req, res){
     const query = req.body.cityName;
     const apiKey = "4e5d4e0b9476ad250404fc8eb1409422";
     const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=" + apiKey + "&units=metric";
     https.get(url, function(response){
          console.log(response.statusCode);

          response.on("data", function(data){
               const weatherData = JSON.parse(data);
               const temp = weatherData.main.temp;
               const weatherDescription = weatherData.weather[0].description;
               const icon = weatherData.weather[0].icon;
               const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
               console.log(temp);
               console.log(weatherDescription);
               res.write("<h1>The temperature in "+ query +" is " + temp + " Celcius</h1>");
               res.write("<h1>The weather in "+ query +" is " + weatherDescription + "</h1>");
               res.write("<img src=" + imageURL + ">");
               res.send();
          })
     });
})