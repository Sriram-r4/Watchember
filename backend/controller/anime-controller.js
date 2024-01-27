const Anime = require('../models/anime-model')

//create a new anime
const createAnime = async (req, res) => {
    const { anime_name, rating, startdate, Enddate, original_status, your_status } = req.body;
    try {
        const AnimeInfo = await Anime.create(
            {
                anime_name,
                rating,
                startdate,
                Enddate,
                original_status,
                your_status
            }
        )
        res.status(200).json(AnimeInfo);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

const getAnimes = async (req, res) => {
    const Animes = await Anime.find({}).sort({ createdAt: -1 })

    res.status(200).json(Animes)
}

const getAnime = async (req, res) => {
    const { id } = req.params

    const anime = await Anime.find({ anime_id: id })

    if (!anime) {
        return res.status(404).json({ error: 'No Such Anime' })
    }
    res.status(200).json(anime)
}

const deleteAnime = async (req, res) => {
    const { id } = req.params

    const anime = await Anime.findOneAndDelete({ anime_id: id })

    if (!anime) {
        return res.status(404).json({ error: 'No Such Anime' })
    }
    res.status(200).json(anime)
}

const updateAnime = async (req, res) => {
    const { id } = req.params
    const { ...update } = req.body;
    try {
        const anime = await Anime.findOneAndUpdate({ anime_id: id }, update, {
            new: true
        })
        if (!anime) {
            return res.status(400).json({ error: 'No Such Anime' })
        }
        res.status(200).json(anime)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }

}



module.exports = {
    createAnime,
    getAnimes,
    getAnime,
    deleteAnime,
    updateAnime,
}