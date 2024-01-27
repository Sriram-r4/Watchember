import React from 'react'
import './Genre.css'
import { Link } from 'react-router-dom'
import booksimage from "../assets/books-image.png"
import animeimage from "../assets/anime-image.png"
import movieimage from "../assets/movies-image.png"
import seriesimage from "../assets/series-image.png"
import songsimage from "../assets/song-image.png"
import podcastimage from "../assets/podcast-image.png"

function Genre() {
    const genre = [
        {
            link: "/books",
            src: booksimage,
            alt: "books",
            text: "Books"
        },
        {
            link: "/anime",
            src: animeimage,
            alt: "anime",
            text: "Anime"
        },
        {
            link: "/movie",
            src: movieimage,
            alt: "movie",
            text: "Movie"
        },
        {
            link: "/series",
            src: seriesimage,
            alt: "series",
            text: "Series"
        },
        {
            link: "/songs",
            src: songsimage,
            alt: "songs",
            text: "Songs"
        },
        {
            link: "/podcasts",
            src: podcastimage,
            alt: "podcasts",
            text: "Podcasts"
        }

    ]

    return (
        <div className='genre'>
            <div className='genre-container'>
                <div className='genre-title'>Select<span className='genre-title-sub'>&nbsp;Genre</span> </div>
                <div className='genre-title-desc'>choose a category from below to group under common genre</div>
                <div className='genre-items'>
                    <div className='genre-items-container'>
                        {genre.map((g,i)=>{
                            return(<div key={i}>
                                <Link to={g.link} >
                                <div className='genre-item'>
                                    <img src={g.src} className="genre-item-img" alt={g.alt} />
                                    <div className='genre-item-text'>{g.text}</div>
                                </div>
                                </Link>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Genre