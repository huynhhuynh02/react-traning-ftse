import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Topchart.css';
import Title from '../components/Topchart-title';
import Ranking from '../components/Ranking';
import top10 from '../images/top10.jpg';
import mood from '../images/mood.jpg';
import data from '../data';
class Topchart extends React.Component {
    render() {
        const ranking = data.map((item) =>
            <Ranking
                number={item.id}
                imgBG={item.picture}
                name={item.song}
                nameArt={item.artist}
            >
            </Ranking>
        )
        return (
            <div className="Topchart-page pt-3 pl-4">
                <div className="container-fluid">
                    <Title nameTC='Top chart: Global' amount='10 song, 1 hours, 22 minutes' imgBG={top10}></Title>
                    <div id="saying">
                        <p>The most-played songs around the world updated every day.</p>
                    </div>
                    {/* <Ranking number='01' imgBG={mood} name='Mood' nameArt='24kgoldn, Lann Dior' time='4:02'></Ranking>
                    <Ranking number='01' imgBG={mood} name='Mood' nameArt='24kgoldn, Lann Dior' time='4:02'></Ranking>
                    <Ranking number='01' imgBG={mood} name='Mood' nameArt='24kgoldn, Lann Dior' time='4:02'></Ranking>
                    <Ranking number='01' imgBG={mood} name='Mood' nameArt='24kgoldn, Lann Dior' time='4:02'></Ranking>
                    <Ranking number='01' imgBG={mood} name='Mood' nameArt='24kgoldn, Lann Dior' time='4:02'></Ranking>
                    <Ranking number='01' imgBG={mood} name='Mood' nameArt='24kgoldn, Lann Dior' time='4:02'></Ranking> */}
                    {ranking}
                </div>
            </div>

        );
    };
}

export default Topchart;