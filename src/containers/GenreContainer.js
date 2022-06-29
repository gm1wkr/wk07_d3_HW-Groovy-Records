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
    const [selectedGenre, setSelectedGenre] = useState('All');

    console.log(`selectedGenre ${selectedGenre}`);

    // useEffect( () => {
    //     setSelectedGenre();
    // }, [selectedGenre])

    useEffect(() => {
        getGenreCharts();
    }, [selectedGenre])

    const getGenreCharts = async function(){
        const genreLink = genreURLs.find(genre => genre.genreName === selectedGenre);
        const res = await fetch(genreLink.url);
        const genreCharts = await res.json();
        setGenreCharts(genreCharts.feed.entry);
    }

    return(
        <>
            <section className="genre-container">
                <GenreList genreCharts={genreCharts} />
                <div>
                    <h2>Genre Charts</h2>
                <GenreSelect genres={genreURLs} onGenreSelected={setSelectedGenre} />
                </div>
                
            </section>
        
        </>
    )
}

export default GenreContainer;