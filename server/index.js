// const express = require('express')
import express from 'express';
import { readFileSync } from 'fs';

const app = new express();

app.use(express.static("dist"))

app.get('/', async (_req, res) => {

     const index = readFileSync(`public/index.html`, `utf8`);
     console.log(index)
     res.send(index)
    // res.send(
    //     `<h1>REACT IS EXCELLENT</h1>`
    // )
})

app.listen(5555);
console.info('Server is working')