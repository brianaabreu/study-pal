import React from 'react';
import Logo1 from '../img/logo1.png';
import Logo2 from '../img/logo2.png';
import '../App.scss';
import { Link } from 'react-router-dom';
import SVG from '../img/education.svg';
import Create from './createCard'



const Header = () => {

    return (
        <div className="homeWrapper">
            <img className="Logo" src={Logo1} />

            <div className="navBar">
                <Link to="/" ><a href="#!"> Home</a></Link>
                <Link to="/create"><a href="#!"> Create a Flashcard</a></Link>
                <Link to="view"><a href="#!"> View Cards</a></Link>
                <Link to="contact"><a href="#!"> Contact</a></Link>

            </div>
        </div>
    )
}

export default Header;