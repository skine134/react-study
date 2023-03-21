import { useEffect, useState } from "react"
import Movie from "../components/Movie";
import styles from "../styles/MovieList.module.css"

function MovieList() {
    // const temp = {
    //     "status": "ok",
    //     "status_message": "Query was successful",
    //     "data": {
    //         "movie_count": 23,
    //         "limit": 20,
    //         "page_number": 1,
    //         "movies": [
    //             {
    //                 "url": "https:\/\/yts.mx\/movies\/elvis-the-pig-2022",
    //                 "title": "Elvis the Pig",
    //                 "title_english": "Elvis the Pig",
    //                 "genres": [
    //                     "Family"
    //                 ],
    //                 "summary": "A young girl learns she may have to sell her beloved pet pig, Elvis, to a local farmer to save the family farm. Unbeknownst to her, the pig is in real danger, the farmer is planning a pig roast and not a forever home. The whole family bands together to save Elvis, uniting to reclaim their farm, proving that love is worth more than money.\u2014Millspictures Studios",
    //                 "description_full": "A young girl learns she may have to sell her beloved pet pig, Elvis, to a local farmer to save the family farm. Unbeknownst to her, the pig is in real danger, the farmer is planning a pig roast and not a forever home. The whole family bands together to save Elvis, uniting to reclaim their farm, proving that love is worth more than money.\u2014Millspictures Studios",
    //                 "background_image": "https:\/\/yts.mx\/assets\/images\/movies\/elvis_the_pig_2022\/background.jpg",
    //                 "background_image_original": "https:\/\/yts.mx\/assets\/images\/movies\/elvis_the_pig_2022\/background.jpg",
    //                 "small_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/elvis_the_pig_2022\/small-cover.jpg",
    //                 "medium_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/elvis_the_pig_2022\/medium-cover.jpg",
    //                 "large_cover_image": "https:\/\/yts.mx\/assets\/images\/movies\/elvis_the_pig_2022\/large-cover.jpg",
    //             }
    //         ]
    //     }
    // }
    const [dataArray, setArray] = useState([]);
    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
            .then((response) => (response.json()))
            .then((json) => {
                setArray(json.data.movies)
            })

        console.log(dataArray)
    }, [])
    return (
        <div className={styles.container}>
            <div className={"MovieList " + styles.movies}>
                    {
                        dataArray.map((item, idx) => {
                            return (
                                <Movie title={item.title}
                                                description={item.description_full}
                                                categories={item.genres}
                                                imageUrl={item.medium_cover_image}
                                                index={idx}
                                                id={item.id}></Movie>)
                        })
                    }
                </div>
        </div>
    )
}

export default MovieList;