import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { title } from "process";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true }));

app.get("/", (req,res) =>{
    res.render(__dirname + "/views/index.ejs")
});

app.post('/submit',(req, res) => {
    const numLetters = req.body['fName'].length + req.body['lName'].length;
    console.log(numLetters);
    res.render(__dirname + "/views/index.ejs", { numberOfLetters: numLetters });
        },
    );

// let letters = 0
// let letters = length.name + length.lname
// console.log(length.fName);
// console.log(fName);

app.listen( port, ()=>{
    console.log(`Listening for requests at ${port} `);
});