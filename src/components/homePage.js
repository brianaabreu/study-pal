import React from 'react';
import Logo1 from '../img/logo1.png';
import Logo2 from '../img/logo2.png';
import '../App.scss';
import { Link } from 'react-router-dom';
import SVG from '../img/education.svg';
import Header from './header';


const HomePage = () => {

    return (
        <div className="homeWrapper">
            <Header />
            <div className="sloganWrap">
                <div className="sloganText">
                    <h2>
                    Start your journey to ACE that test!

                    </h2>
                    <h6>Create flashcards to quiz yourself, designed to help you pass all your tests!</h6>
                    <Link style={{alignItems:'center'}} to="/create">
                    <button >Start Creating!</button>
                    </Link>
                </div>
                <div>
                    <img className="svg" src={SVG} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;