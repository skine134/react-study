import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import style from '../styles/Movie.module.css'
const Movie = ({ index=0, id, title, description, categories, imageUrl }) => {

    return (
        <div className={`Movie-${index} ${style.movie}`}>
            <img className={style.movie__img} src={imageUrl} alt={title}></img>
            <div>
                <h2 className={style.movie__title}>
                    <Link to={`/movie/${id}`} >{title}</Link>
                </h2>
                <p>{description.length>235? description.slice(0,235) + "...":description}</p>
                <ul className={style.movie__genres}>
                    {categories.map((category, categoryIdx) => {
                        return (<li key={categoryIdx}>{category}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    imageUrl: PropTypes.string.isRequired,
    index: PropTypes.number
}

export default Movie