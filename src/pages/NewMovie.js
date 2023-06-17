import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./NewMovie.scss"

const Imgs = styled.div`
        background-image: linear-gradient(
            to right,
            rgba(0,0,0,0) 10%,
            rgba(0,0,0,0.2) 25%,
            rgba(0,0,0,0.5) 50%,
            rgba(0,0,0,1) 75%,
            rgba(0,0,0,1) 100%), 
            url('images/quantumania-02.jpg');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: left center;
            width: 100%;
            height: 889px;
            `;
     

const NewMovie = () => {
    return (
        <div id="newMovie">
            <div id="youtubeText">
                <div className="movieText">
                    <Link to='/detail/33'>
                    <h2>Ant-Man and the Wasp <br/> Quantum Mania</h2>
                        <p>The superhero partners 'Scott Lang' and 'Hope Van Dyne',
                            Hope's parents, 'Janet Van Dyne' and 'Hank Pym',
                            And Scott's daughter, Cathy Lang.
                            The 'Ant-Man Family' fell into the unknown world of 'Quantum Realm'.

                            There, he meets new beings and the conqueror 'Kang' who rules the infinite universe.
                            An adventure that goes beyond the limits of everything that no one expected...
                        </p>
                    </Link>
                </div>
                <ReactPlayer className="youtube"
                    url={"https://youtu.be/33Ljhqgdtsc"}
                    width="600px"
                    heigh="400px"
                    muted={true}
                    playing={true}
                    loop={true}
                    controls={true}
                    /* volume= {0.2}
                    pip={true} */
                />
            </div>
                <div id="bgm">
                <Link to='/detail/33'><Imgs/></Link>
            </div>
        </div>
    );
};

export default NewMovie;