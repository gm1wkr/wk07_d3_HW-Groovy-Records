import React, {useState, useEffect} from "react";
import GenreList from "../components/GenreList";

const GenreContainer = () => {

    const [genreCharts, setGenreCharts] = useState([]);


    useEffect(() => {
        getGenreCharts();
    }, [])

    const getGenreCharts = async function(){
        const res = await fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json');
        const genreCharts = await res.json();
        setGenreCharts(genreCharts.feed.entry);
    }

    return(
        <>
            <section className="genre-container">
                <h2>Genre Charts</h2>
                <GenreList genreCharts={genreCharts} />
            </section>
        
        </>
    )
}

export default GenreContainer;