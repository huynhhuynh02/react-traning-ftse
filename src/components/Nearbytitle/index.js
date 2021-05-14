import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cafe from "../../images/cafe.jpg";
import mood from "../../images/mood.jpg";
import { MdLibraryAdd } from "react-icons/md";
import { FiDownload, FiPause, FiPlay } from "react-icons/fi";
import { GiShare, GiSpeaker } from "react-icons/gi";
import { ImVolumeMute2 } from "react-icons/im";
import { VscDebugReverseContinue, VscDebugContinue } from "react-icons/vsc";
import Slider from "react-input-slider";
import '../../style/Nearbytitle.css';
class Nearbytitle extends React.Component {
    render() {
        return (
            <div className="Nearby-title" style={{ backgroundImage: `url(${mood})` }}>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="Bg-nearby col-3">
                            <img src={cafe} />
                        </div>
                        <div className="Name-nearby col-9">
                            <div>
                                <h1>Ice Cream</h1>
                                <h5>BlackPink,Selena Gomez</h5>
                            </div>
                            <div className="Tool">
                                <MdLibraryAdd></MdLibraryAdd>
                                <FiDownload></FiDownload>
                                <GiShare></GiShare>
                            </div>
                            <div className="Control">
                                <div className="Line">
                                    <Slider
                                        styles={{
                                            track: {
                                                backgroundColor: 'blue'
                                            },
                                            active: {
                                                backgroundColor: 'red'
                                            },
                                            thumb: {
                                                width: 20,
                                                height: 20
                                            },
                                            disabled: {
                                                opacity: 0.5
                                            }
                                        }}
                                    />
                                </div>
                                <div className="Direct">
                                    <div>
                                        <VscDebugReverseContinue></VscDebugReverseContinue>
                                        <FiPause></FiPause>
                                        <VscDebugContinue></VscDebugContinue>
                                    </div>
                                    <div>
                                        <GiSpeaker></GiSpeaker>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Nearbytitle;