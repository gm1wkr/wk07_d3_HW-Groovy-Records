import React from "react";

const ChartItem = ({ chart, onClick }) => {
    const titleParts = chart['title']['label'].split('-');

    const handleTitleClick = (event) => {
        onClick(chart);
    }

    return(
        <li className="" onClick={handleTitleClick}>
            <b>{chart.position} </b> 
            {titleParts[0]} 
            <b>{titleParts[1]}</b> 
        </li>
    )
}

export default ChartItem;