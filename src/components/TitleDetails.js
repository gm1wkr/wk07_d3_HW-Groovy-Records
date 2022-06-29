import React from "react";

const TitleDetails = ( {title} ) => {
    if (title === null){
        return(
            <>
            <h2>Top 20</h2>
            <p>&lt;&lt;</p>
            <p>Click a title to view details</p>
            </>
        );
    }



    const titleParts = title['title']['label'].split('-');
    const imageURL = title['im:image'][2]['label'];
    const imageSize = title['im:image'][2]['attributes'].height;
    const category = title.category.attributes.label;
    const releaseDate = title['im:releaseDate'].attributes.label;
    const storeLink = title.link[0].attributes.href;


    return(
        <>
            <h3>{titleParts[0]}</h3>
            <h4>{titleParts[1]}</h4>
            <img src={imageURL} width={imageSize} height={imageSize} />
            
            <p class="title-category"><span>Category</span>{category}</p>
            <p class="title-date"><span>Releas Date</span>{releaseDate}</p>
            <p class="title-link">
                <a href={storeLink}>
                <div class="button">
                <button class="button__button button-slide">Buy Now!</button>
        </div>
                </a>
            </p>
        </>
    )
}

export default TitleDetails;