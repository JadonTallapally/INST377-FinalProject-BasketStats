# INST377-FinalProject-BasketStats
INST377 Final Project App
Title: BasketStats

Description: 
BasketStats is a NBA stats viewing site simiilar to sites like ESPN and Yahoo Sports. BasketStats provides usability in 2 primary areas: game scores and player data. The "Game Data" page provides box scores and quarterly data on recent games. The "Stats" page retrieves stats
for any given player, when provided the player name, year, and whether or not you want playoff data. The home page has a few welcoming images, as well some scores of recently concluded games. On the about page, you can learn all about Basketstats, and join the community by announcing your user name and favorite team The goal of BasketStats is to compete with ESPN and the other big guys of the sports world, without all the extra nonsense, like paid subscriptions, gambling ads, and clickbait articles. 

Description of Target Browsers:
The target browsers for this application are both IOS and Andriod users. The application was developed to work in both evironments and provide serivces to both users. 

[Jump to Developer Manual](#developer-manual)

# Developer Manual
# Contents
 - [Installing Applications and Depedencies](#installing-applications-and-dependencies)
 - [Running the Application on a Server](#running-the-application-on-a-server) 
 - [Running Tests](#running-tests)
 - [APIs](#apis)
 - [Expectations and Bugs](#expectations-and-bugs)

# Installing Applications and Dependencies
BasketStats is an express app, ran with nodemon and connected to a supabase database. The dependencies consist of: supabase/supabase-js, body-parser, dotenv, express, nodemon. In order to install these dependencies, first make sure you are in the directory named "basketstatsapp."
Once you are inside of the folder, open an integrated terminal, and install the dependencies using the line: "npm i @supabase/supabase-js body-parser express nodemon dotenv" That should install all the applications/dependencies needed for this app. The app was deployed using vercel and linked directly to the project using github. The same import/connection was used to connect the app to the supabase database. The database table was created directly in supabase. 

## Running the Application on a Server
The application is built to run on a server. To start the server, open an integrated terminal and once again make sure you are in basketstatsapp directory. Once you there, simply type npm start to begin running the application and server.

## Running Tests
Testing for API's was done through Insomnia. It was used to view the data my API's pull as well as to verify that the API's I set up are 
functional. The link for each API can simply be pasted in a GET tab to view the data it pulls. To test our API's, run http://localhost:3000 followed by / and what specific thing you want to pull (/games, /users, /user). While there are no specific software tests implemented, majority of testing was conducted through the inspect feature of the browser. Bugs and failures for compilations could be found there, and thats how I troubleshot and corrected code. 

## APIs
The main API servicing my app is called NBA Statistics Go. Documentation can be found here: [https://documenter.getpostman.com/view/25652688/2sB34Zs4xZ?ref=dr-pa&utm_medium=public-apis-website#cb89cca5-af41-4b41-bea8-6eaecac8cd71]

There are different API calls used to call different data on my app. The home page, uses an API that provides minimal information on games, like location, final score, and date: [https://api.server.nbaapi.com/api/games?isPlayoff=false&page=1&pageSize=50&sortBy=date&ascending=false]. The API is fetched via the backend using app.get and called to the front end with an async function and an await fetch. 

The second API provides the same game information in addition to quarterly data, and player data for that game (like points, rebounds, etc): [https://api.server.nbaapi.com/api/games?isPlayoff=false&page=1&pageSize=5&sortBy=date&ascending=false&include=lineScores,%20playerGameBasicStats] This api was called via the front end (using async function and fetch), and used in the game data page. 

The last api that is from NBA statisitcs go was used in the stats page:[https://api.server.nbaapi.com/api/playertotals?season=2026&team=HOU&page=1&pageSize=15&isPlayoff=False]. This provides indivdiual player statistics, like their points, rebounds and assists for a given year and team. This API was also called via a front end async function and fetch. 

The app also writes and retreives information using an app.get(/users) and app.post(/user) These work with a html form that asks for a username and favoirte team. Those are sent to the database to be stored, and pulled from the data base to a table to showcase to app users. The .get(/users) pulls the users from the database and the .post(/user) adds them to it. 

# Expectations and Bugs
There are a few functionality bugs and tweaks that can be solved in the future. One slight issue is with the API itself. As of right now (5/16) the fetches for the home and games data page are calling from an API that is set to playoff=false. According to the documentation, in order to get playoff only data (which i am trying to get since we are in the playoffs part of the season) playoff should be set to true. For whatever reason (even possibly me reading the documentation wrong) the API still pulls the most recent data, which is playoff data. This flaw is slightly major given that sometimes it will pull playoff data that is not the most recently completed games. Apart from that, the set up of the stats page results in some overlap of data, if the buttons are not used in the correct order. This bug is less major but still impacts the looks and professionalism of the page. There is also no clear button to reset the stats page, so you have to refresh every time you want to look at different stats. 


