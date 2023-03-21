import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "../styles/MovieList.module.css"

function Detail() {
    const params = useParams()
    const [data,setData] = useState()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`)
        .then(response=>response.json()).then(json=>{
            console.log(json);
            setData(json.data.movie);
            setLoading(false);
        })
    },[])
    return (
        <div className={styles.container+" detail"}>
            <div className={"MovieList " + styles.movies}>
                        {loading?null:
                        <Movie title={data.title}
                            description={data.description_full}
                            categories={data.genres}
                            imageUrl={data.medium_cover_image}></Movie>}
            </div>
        </div>
    )
}

export default Detail;