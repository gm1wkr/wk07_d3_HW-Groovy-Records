import React, {useState, useEffect} from "react";
import ChartItem from "../components/ChartItem";
import ChartList from "../components/ChartList";
import TitleDetails from "../components/TitleDetails";

const ChartContainer = () => {

    const [charts, setCharts] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState(null);

    // Fire get Charts on page load
    useEffect(() => {
        getCharts();
      }, [])


    const getCharts = async function(){
        const res = await fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json');
        const charts = await res.json();
        setCharts(charts.feed.entry);
    };

    return(
        <>
            
            <section className="chart-container">
                <div className="chart-list">
                    <ChartList charts={charts} onTitleClick={setSelectedTitle} />
                </div>
                <div className="chart-details">
                    <TitleDetails title={selectedTitle} />
                </div>
            </section>
        </>
    );

}

export default ChartContainer;