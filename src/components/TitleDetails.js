import React from "react";

const TitleDetails = ( {title} ) => {
    if (title === null){
        return null;
    }



    const titleParts = title['title']['label'].split('-');
    const imageURL = title['im:image'][2]['label'];
    const category = title.category.attributes.label;
    const releaseDate = title['im:releaseDate'].attributes.label;
    const storeLink = title.link[0].attributes.href;


    return(
        <>
            <h2>{titleParts[0]} by {titleParts[1]}</h2>
            {title.id.attributes['im:id']}
            {imageURL}
            {category}
            {releaseDate}
            {storeLink}
        </>
    )
}

export default TitleDetails;