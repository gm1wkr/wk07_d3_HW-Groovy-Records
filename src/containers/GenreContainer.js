import React from "react";
import GenreList from "../components/GenreList";

const GenreContainer = () => {
    return(

        <>
            <section className="genre-container">
                <h2>Genre Charts</h2>
                <GenreList />
            </section>
        
        </>

    );
}

export default GenreContainer;