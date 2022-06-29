import React from "react";

const TitleDetails = ( {title} ) => {
    if (title === null){
        return null;
    }



    const titleParts = title['title']['label'].split('-');
    const imageURL = title['im:image'][2]['label'];
    const imageSize = title['im:image'][2]['attributes'].height;
    const category = title.category.attributes.label;
    const releaseDate = title['im:releaseDate'].attributes.label;
    const storeLink = title.link[0].attributes.href;


    return(
        <>
            <h2>{titleParts[0]} <small>{titleParts[1]}</small> </h2>
            {title.id.attributes['im:id']}
            <img src={imageURL} width={imageSize} height={imageSize} />
            
            {category}
            {releaseDate}
            {storeLink}
        </>
    )
}

export default TitleDetails;