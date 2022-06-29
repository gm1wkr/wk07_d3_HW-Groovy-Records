import React from "react";
import GenreChartItem from "./GenreChartItem";

const GenreList = ({ genreCharts }) => {

    const genreChartItems = genreCharts.map((chart, index) => {
        const id = chart.id.attributes['im:id'];
        chart['position'] = index + 1;
        return (
        <GenreChartItem chart={chart} key={id} />
        )
    });


    return (
        <div className="chartsList">
            <ul>
                {genreChartItems}
            </ul>
        </div>
    );
}

export default GenreList;