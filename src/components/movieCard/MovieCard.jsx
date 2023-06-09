import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import{FaStar} from 'react-icons/fa'
import './MovieCard.css'
const imageURL = import.meta.env.VITE_IMG

const MovieCard = ({movie}) => {
    const vote= movie.vote_average

    return(
        <div className="movie-card">
            <Link to={`/movie/${movie.id}`}>
                <img src={imageURL + movie.poster_path} alt={movie.title} className="movieCardImage"/>
            </Link>
            <h2>{movie.title}</h2>
            <p>
                <FaStar/>{vote.toFixed(1)}/10
            </p>
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    //showLink: PropTypes.bool.isRequired
}

export default MovieCard