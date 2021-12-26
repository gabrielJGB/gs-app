var axios = require("axios").default;
const request = require("request")
const express = require('express');
const countries = require('./countries.json');
const playersFile = require('./playersFile.json');

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{console.log('Listening on port', PORT);});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));


const options = {
  method: 'GET',
  url: 'https://tennis-live-data.p.rapidapi.com/rankings/ATP',
  headers: {
    'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com',
    'x-rapidapi-key': '020943499bmshb339bbc8990f055p1e1496jsnfcfb658f9421',
    useQueryString: true
  }
};

let players = [];

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   const parsedData = JSON.parse(body);

//   parsedData.results.rankings.forEach(player=>{
  
//     let flagSvg = ''

//     countries.forEach(country=>{
      
//       if(country.name.common === player.country){
//           flagSvg = country.flags.png
//       }
//     });


//     players.push({
//       "ranking":player.ranking,
//       "flag":flagSvg,
//       "name":player.last_name
//     });
//   });
// });


  const parsedData = JSON.parse(JSON.stringify(playersFile));

  parsedData.results.rankings.forEach(player=>{
  
    let flagSvg = ''

    countries.forEach(country=>{
      
      if(country.name.common === player.country){
          flagSvg = country.flags.png
      }
    });


    players.push({
      "ranking":player.ranking,
      "flag":flagSvg,
      "name":player.last_name
    });
  });





app.get('/',(req,res)=>{
  res.render('index',{players})
})

app.get('/test',(req,res)=>{
  res.render('test')
})


// app.get('/',(req,res)=>{
//   res.render('players',{players})
// })





// const options = {
//   method: 'GET',
//   url: 'https://restcountries.com/v3.1/all',
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   let flagsLinks = JSON.parse(body);
//   flagsLinks.results.rankings.forEach(i=>{console.log(i.country)});
// });




