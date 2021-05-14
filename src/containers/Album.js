import React from "react";
import '../style/Album.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import china from "../images/china.jpg";import dizz from "../images/dizz.jpg";import vibes from "../images/vibes.jpg";
import swag from "../images/swag.jpg";import rapparty from "../images/rapparty.jpg";import baddass from "../images/baddass.jpg";
import kpop from "../images/kpop.jpg";import workhard from "../images/workhard.jpg";import streets from "../images/streets.jpg";
import god from "../images/god.jpg";
import Collect1 from "../components/Collect1";
import {Link} from 'react-router-dom';
import {albums} from '../data';

class Album extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Album-page pt-3 " style={{ paddingLeft: "35px", paddingRight: "80px", color: "white" }}>
                <div className="Container">
                    <div className="row m-0">
                        <div className="Title col-12 p-0">
                            <h4>Mood and Activity</h4>
                        </div>
                        <Carousel>
                            <Carousel.Item>
                                <Collect1 limit={3} offset={0}></Collect1>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="row m-0 mt-4">
                        <div className="Title col-12 p-0">
                            <h4>Category</h4>
                        </div>
                        <Carousel>
                            <Carousel.Item>
                                <Collect1 limit={7} offset={4}></Collect1>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="row m-0 mt-4">
                        <div className="Title col-12 p-0">
                            <h4>Young & Free</h4>
                        </div>
                        <Carousel>
                            <Carousel.Item>
                                <Collect1 limit={12} offset={8}></Collect1>
                                {/* <Collect1 imgBG1={china} childtt1="China music" imgBG2={dizz} childtt2="Dizz Music" imgBG3={vibes}
                                    childtt3="Vibes hiphop" imgBG4={swag} childtt4="V-swag" imgBG5={rapparty} childtt5="Party Music" ></Collect1> */}
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}
export default Album;