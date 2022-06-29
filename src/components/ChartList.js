import React from "react";
import ChartItem from "./ChartItem";

const ChartList = ({ charts, onTitleClick }) => {

    // Map over charts and make ChartItem whatever.
    // console.log(charts);
    const chartItems = charts.map((chart, index) => {
        const id = chart.id.attributes['im:id'];
        chart['position'] = index + 1;
        return (
        <ChartItem chart={chart} key={id} onClick={onTitleClick} />
        )
    });

    // Return a list of ?Divs

    return(
        <div className="chartsList">
            <ul>
                {chartItems}
            </ul>
        </div>
    );


}

export default ChartList;