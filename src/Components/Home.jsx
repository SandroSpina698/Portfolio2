import React, { useEffect, useState } from 'react';
import '../Assets/Styles/Home.scss';
import MoiRond from "../Assets/Media/MoiSelfieRond.png";
import MoiRondSilco from "../Assets/Media/MoiSelfieRondSilco.png";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from 'framer-motion';

function Home() {
    const txt = "//Et merci de la visite :)";
    const [count, setCount] = useState(0);

    function typeWriter(word, index) {
        let title = document.getElementById("comment");

        if (index < word.length) {
            setTimeout(() => {
                title.innerHTML += '<span>' + word[index] + '</span>';
                typeWriter(txt, index + 1)
            }, 100);
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            typeWriter(txt, 0);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        init: {
            opacity: 0,
            x: '40vw',
        },
        visible: {
            opacity:1,
            x: 0,
            transition: {duration: 1}
        },
        exit:{
            x: '-100vw',
            opacity: 0,
            transition: {ease: 'easeInOut', duration: 1.5}
        }
    }

    

    return (
        <motion.div className='home'
            variants={containerVariants}
            initial="init"
            animate="visible"
            exit="exit"
        >
            <div className='img' onClick={() => setCount(count+1)}>
                <img className={count===7?'nonactiveMoi':'activeMoi'} src={MoiRond} alt="Photo de Moi" width="270px" />
                <img className={count===7?'activeSilco':'nonactiveSilco'} src={MoiRondSilco} alt="Photo de presque moi, j'aime bien arcane" width="270px"/>
            </div>

            <div className='welcome-text'>
                <span>BIENVENUE</span>
                <span> SUR MON SITE PERSONNEL!</span>
                <h1 aria-label='//et merci de la visite' id="comment"></h1>
                {/* <span id = "comment">//et merci de la visite</span> */}
            </div>
            <motion.div className='bottom'
            initial={{y : 200, opacity : 0}}
            animate={{y : 0 , opacity:1, transition : {delay:1.5 , duration : 1.5}}}
            >
                
                <Link title = "Télécharger mon cv" id = "beFree" to="/CV.pdf" target="_blank" download>
                    <FontAwesomeIcon icon="file-download" />
                </Link>
                <div className="social-container">
                    <ul className="social-icons">
                        {/* <li><a href="#"><i className="fa fa-instagram"></i></a></li> */}
                        <li><a href="https://twitter.com/Sandr0Spina"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/sandro-spina-281b351b9/"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div className='icon'>
                    <Link to="/Moi">
                        <FontAwesomeIcon icon="arrow-right" id="arrow" />
                    </Link>
                    <p className='bubble'>l'humain derrière le CV</p>
                </div>
            </motion.div>
        </motion.div>);



}

export default Home;
