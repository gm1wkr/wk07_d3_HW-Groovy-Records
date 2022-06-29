import React, {useState, useEffect} from "react";
import GenreList from "../components/GenreList";
import GenreSelect from "../components/GenreSelect";

const GenreContainer = () => {

    const genreURLs = [
        {genreName: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
        {genreName: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
        {genreName: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
        {genreName: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}
    ]


    const [genreCharts, setGenreCharts] = useState([]);
    const [genreURL, setGenreURL] = useState(genreURLs);
    const [selectedGenre, setSelectedGenre] = useState(null);

    console.log(selectedGenre);

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
                <GenreSelect genres={genreURLs} onGenreSelected={setSelectedGenre} />
                <GenreList genreCharts={genreCharts} />
            </section>
        
        </>
    )
}

export default GenreContainer;