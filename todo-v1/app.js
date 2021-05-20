

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')


app.get("/", (req, res) => {
     var today = new Date()
     kindOfDay = ""
     switch(today.getDay()){
          case 0:
               kindOfDay = "Sunday"
               break
          case 1:
               kindOfDay = "Monday"
               break
          case 2: 
               kindOfDay = "Tuesday"
               break
          case 3: 
               kindOfDay = "Wednesday"
               break
          case 4:
               kindOfDay = "Thursday"
               break
          case 5:
               kindOfDay = "Friday"
               break
          case 6:
               kindOfDay = "Saturday"
               break
          default:
               kindOfDay = "You fucked up"
               break
     }

     res.render("list", {kindOfDay: kindOfDay} )
})


app.listen(3000, () => {
     console.log("Server started on port: 3000");
})
