import React from "react";

const GenreSelect = ({ genres, onGenreSelected }) => {

    const handleSelectChange = (event) => {
        const selectedGenre = event.target.value;
        onGenreSelected(selectedGenre);
    }


    const genreOptions = genres.map( (genre, index) => {
        return(
            <option key={index} value={genre.genreName}>{genre.genreName}</option>
        )
    });

    return (
        <select onChange={handleSelectChange}>
            {genreOptions}
        </select>
    )
}

export default GenreSelect;