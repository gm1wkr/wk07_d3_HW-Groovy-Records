import React from "react";

const GenreChartItem = ({ chart }) => {
    const titleParts = chart['title']['label'].split('-');


    return(
        <li className="">
            <b>{chart.position} </b> 
            {titleParts[0]} 
            <b>{titleParts[1]}</b> 
        </li>
    )
}

export default GenreChartItem;