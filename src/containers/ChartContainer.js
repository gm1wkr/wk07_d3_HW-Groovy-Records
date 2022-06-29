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
    }

    return(
        <>
            
            <div className="chart-container">
                <section className="chart-list">
                    <ChartList charts={charts} onTitleClick={setSelectedTitle} />
                </section>
                <section className="chart-details">
                    <TitleDetails title={selectedTitle} />
                </section>
            </div>
        </>
    )

}

export default ChartContainer;