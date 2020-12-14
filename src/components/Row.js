import React,{useState,useEffect} from 'react'
import axios from '../backend/axios'
import '../css/Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({title,fetchUrl,isLargePost}) => {

    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("")

    useEffect(() => {
        const fetchData = async () => {
             const request = await axios.get(fetchUrl)
             setMovies(request.data.results)
             return request
        }
        fetchData()
    },[fetchUrl])

    const opts =  {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer((movie?.name || movie?.title || movie?.original_name) || "")
            .then(url => {
                const urlParams =new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((e) => {
                console.log(e.message)
            })
        }
    }
    

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            
            <div className="row__posters">
                {movies.map(movie => (
                    <img onClick={(e) => handleClick(movie)} key={movie.id} className={`row__poster ${isLargePost && 'row__postLarge'}`} src={`${base_url}${isLargePost ? movie.poster_path : movie.backdrop_path}`}/>
                ))}
            </div>
            {/* container -> films */}
            {trailerUrl && <Youtube opts={opts} videoId={trailerUrl}/> }
        </div>
    )
}

export default Row
