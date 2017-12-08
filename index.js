/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import express from "express";
import consign from "consign";
var path = require('path');

const PORT = 5000;
const app = express();

app.set("json spaces", 4);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

consign()
        .include("routes")
        .into(app);

app.listen(PORT, () => console.log('Ca marche'));
