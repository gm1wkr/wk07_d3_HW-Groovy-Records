import React from "react";

const ChartItem = ({ chart, onClick }) => {
    const titleParts = chart['title']['label'].split('-');

    const handleTitleClick = (event) => {
        onClick(chart);
    }

    return(
        <li className="chart-item" onClick={handleTitleClick}>
            <p class="chart-position">{chart.position} </p> 
            <p class="chart-title">{titleParts[0]} </p>
            <p class="chart-artist">{titleParts[1]}</p> 
        </li>
    )
}

export default ChartItem;