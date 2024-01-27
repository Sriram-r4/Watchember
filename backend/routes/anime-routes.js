const express = require('express');
const router= express.Router();

const {
    createAnime,
    getAnimes,
    getAnime,
    deleteAnime,
    updateAnime,    
} = require("../controller/anime-controller")

//Create a single anime
router.post('/anime',createAnime)

//GET all anime
router.get('/anime',getAnimes)

//GET a single anime
router.get('/anime/:id',getAnime)

//DELETE a single anime
router.delete('/anime/:id',deleteAnime)


//UPDATE a single anime
router.patch('/anime/:id',updateAnime)

router.get('/animes/download',getAnimes)






module.exports =router;