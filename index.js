var express = require("express");
var movies = require("./movies.json");
var bodyParser = require("body-parser");

var app = express();

app.get("/movies", (request, response) => {
  response.send(movies);
});
app.get("/movies/:slug", (request, response) => {
  var selectmovies = movies.filter(item => {
    return item.slug === request.params.slug;
  });

  if (selectmovies.length) {
    response.send(selectmovies);
  } else {
    response.sendStatus(404);
  }
});

app.post('/movies', bodyParser.json(), (request, response) => {
    const { Title, Directors, Release Date, Rating, Run Time, Genres, slug, teamSlug } = request.body
  
    if (!Title || !Directors || !Release Date || !Rating ||! Run Time || !Genre || !slug || !teamSlug) {
      response.status(400).send('The following attributes are required: Title, Director, Release Date, Rating, Run Time, Genres, slug, teamSlug')
    }

    app.all("*", (request, response) => {
  response.sendStatus(404);
});



app.listen(1337, () => {
  console.log("Listening on 1337...");
});


module.exports = app;
