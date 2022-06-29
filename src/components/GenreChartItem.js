import React from "react";

const GenreChartItem = ({ chart }) => {
    const titleParts = chart['title']['label'].split('-');


    return(
        <li className="chart-item">
            <p class="chart-position">{chart.position} </p> 
            <p class="chart-title">{titleParts[0]} </p>
            <p class="chart-artist">{titleParts[1]}</p> 
        </li>
    )
}

export default GenreChartItem;