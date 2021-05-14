import React from "react";
import { FaHeadphones, FaSearch, FaTrophy, FaMicrophone } from "react-icons/fa";
import { RiAlbumFill } from "react-icons/ri";
import { AiFillClockCircle } from "react-icons/ai";
import '../../style/Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
class Sidebar extends React.Component {
    render() {
        return (

            <div className="Sidebar">
                <div className="Logo">
                    <div><FaHeadphones></FaHeadphones></div>
                    <div><Link className='text-white' to="/"><h5>Nammusic</h5></Link></div>
                </div>
                <div className="Menu-1 pt-5">
                    <h4>MENU</h4>
                    <ul>
                        <li><Link className="text-white" to="/album"><RiAlbumFill></RiAlbumFill><a>Albums</a></Link></li>
                        <li><Link className='text-white' to="/topchart"><FaTrophy></FaTrophy><a>Top Chart</a></Link></li>
                        <li><Link className='text-white' to="/nearby"><AiFillClockCircle></AiFillClockCircle><a>History</a></Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Sidebar;