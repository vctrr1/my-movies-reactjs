import { useState, useEffect } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import '../home/Home.css'
import LoadingIcons from 'react-loading-icons'

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API

const Home = () => {
    const [topRatedMovies, setTopRated] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])

    const getTopRaded = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopRated(data.results)

    }
    const getUpcomingMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setUpcomingMovies(data.results)


    }
    const getPopularMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setPopularMovies(data.results)

    }

    useEffect(() => {
        const topRatedURL = `${moviesURL}top_rated?${apiKey}`
        const upcomingMoviesURL = `${moviesURL}upcoming?${apiKey}`
        const popularMoviesURL = `${moviesURL}popular?${apiKey}`

        getTopRaded(topRatedURL)
        getUpcomingMovies(upcomingMoviesURL)
        getPopularMovies(popularMoviesURL)

    },[])

    return (
        <div className="container">
            <h2 className="title">Em Breve</h2>
            <div className="movies-container">
                {upcomingMovies.length === 0 && <LoadingIcons.Circles />}
                {
                    upcomingMovies.map((movie) => 
                        <MovieCard movie={movie} key={movie.id}/>
                    )
                }
            </div>
            <h2 className="title">Filmes Melhores Avaliados</h2>
            <div className="movies-container">
                {topRatedMovies.length === 0 && <LoadingIcons.Circles/>}
                {
                    topRatedMovies.map((movie) => 
                        <MovieCard movie={movie} key={movie.id}/>
                    )
                }
            </div>
            <h2 className="title">Populares</h2>
            <div className="movies-container">
                {popularMovies.length === 0 && <LoadingIcons.Circles />}
                {
                    popularMovies.map((movie) => 
                        <MovieCard movie={movie} key={movie.id}/>
                    )
                }
            </div>
        </div>
    )
}

export default Home;