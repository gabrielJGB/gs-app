const request = require('request');
const express = require('express');
const countries = require('./countries.json');
const playersFile = require('./playersFile.json'); //temp

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
    'x-rapidapi-key': process.env.API_KEY,
    useQueryString: true
  }
};

let players = [];

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  const parsedData = JSON.parse(body);

  parsedData.results.rankings.forEach(player=>{
  
    let flagImg = ''

    countries.forEach(country=>{
      
            if(player.country === 'Bosnia & Herzegovina'){
        flagImg = countries[4].flags.png;
      }
      if(player.country === 'Chinese Taipei'){
        flagImg = countries[185].flags.png;
      }
      if(player.country === 'Czech Republic'){
        flagImg = countries[80].flags.png;
      }
      else if(player.country === 'USA'){
        flagImg = countries[157].flags.png;
      }
      else if(country.name.common === player.country){
          flagImg = country.flags.png
      }
    });


    players.push({
      "ranking":player.ranking,
      "flag":flagImg,
      "name":player.last_name
    });
  });
});




  // const parsedData = JSON.parse(JSON.stringify(playersFile));

  // delete parsedData.results.rankings[13]

  // parsedData.results.rankings.forEach(player=>{
  
  //   let flagImg = ''

  //   countries.forEach(country=>{
        
  //     if(player.country === 'Bosnia & Herzegovina'){
  //       flagImg = countries[4].flags.png;
  //     }
  //     if(player.country === 'Chinese Taipei'){
  //       flagImg = countries[185].flags.png;
  //     }
  //     if(player.country === 'Czech Republic'){
  //       flagImg = countries[80].flags.png;
  //     }
  //     else if(player.country === 'USA'){
  //       flagImg = countries[157].flags.png;
  //     }
  //     else if(country.name.common === player.country){
  //         flagImg = country.flags.png
  //     }
  //   });


  //   players.push({
  //     "ranking":player.ranking,
  //     "flag":flagImg,
  //     "name":player.last_name
  //   });
  // });

//---------



app.get('/',(req,res)=>{
  res.render('index',{players})
});




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




