@echo off

cd C:\Users\rgutierrez\Downloads
start rethinkdb

cd C:\Users\rgutierrez\node\platzigram-nodejs\platzigram
start node server

cd C:\Users\rgutierrez\node\platzigram-nodejs\platzigram-api
start micro -p 5000 pictures.js

cd C:\Users\rgutierrez\node\platzigram-nodejs\platzigram-api
start micro -p 5001 users.js

cd C:\Users\rgutierrez\node\platzigram-nodejs\platzigram-api
start micro -p 5002 auth.js

cd C:\Users\rgutierrez\node\platzigram-nodejs\platzigram-ws
start npm start