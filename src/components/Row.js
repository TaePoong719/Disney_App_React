import React, { useCallback, useEffect, useState } from 'react'
import axios from '../api/axios'
import './Row.css'
import MovieModal from './MovieModal'

const Row = ({ title, id, fetchURL }) => {
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState({})

  // 렌더링마다 함수를 새로 생성할 필요가 없다. useCallback 사용
  // fetchURL이 바뀔 경우만 리랜더링
  const fetchMovieData = useCallback( async () => {
    const response = await axios.get(fetchURL)
    setMovies(response.data.results)
  },[fetchURL])

  // fetchURL이 바뀌어 fetchMovieData가 변경될 경우 useEffect 콜백함수 재 실행
  useEffect(()=>{
    fetchMovieData()
  },[fetchMovieData])

  const handleClick = (movie) => {
    setModalOpen(true)
    setMovieSelected(movie)
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span 
            className="arrow"
            onClick={()=>{
              document.getElementById(id).scrollLeft -= window.innerWidth -80}}
              >
            {"<"}
          </span>
        </div>

        <div id={id} className="row__posters">
          {movies.map(movie=>
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              onClick={()=> handleClick(movie)}
            />
          )}
        </div>
        
        <div className="slider__arrow-right">
          <span 
            className="arrow"
            onClick={()=>{
              document.getElementById(id).scrollLeft += window.innerWidth -80}}
            >
            {">"}
          </span>
        </div>

        {modalOpen && 
          <MovieModal 
          {...movieSelected}
          setModalOpen={setModalOpen}/>
        }
      </div>
    </div>
  )
}

export default Row