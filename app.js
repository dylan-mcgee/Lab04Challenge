const express = require("express");
const app = express();

const tvshows = [
    {
        name: "The Traitors",
        type: "Game Show",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/499/1248534.jpg",
    },
    {
        name: "Bodies",
        type: "Scripted",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/482/1205619.jpg",
    },
    {
        name: "The English",
        type: "Scripted",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/444/1112100.jpg",
    }
];

app.get("/tv", (req, res) => {

    let html = "<h2>My TV</h2>";

    tvshows.forEach((tv) => {
        html += `<p>${tv.name}</p>`;
        html += `<img src="${tv.image}" alt="${tv.name}" width="200" height="300">`;

    });

    res.send(`${html}`);

});

app.listen(process.env.PORT || 3000);

console.log(` Server is listening on /localhost:3000/ `);
