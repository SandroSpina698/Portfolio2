import React from 'react';
import '../Assets/Styles/Portfolio.scss';
import VideoPtut from '../Assets/Media/PTUT_video3.mp4';
import VideoCpoa from '../Assets/Media/videocpoa.mkv';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


import { motion } from 'framer-motion';
function Portfolio() {
  const containerVariants = {
    init: {
      opacity: 0,
      x: '40vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 }
    },
    exit: {
      x: '-100vw',
      opacity: 0,
      transition: { ease: 'easeInOut', duration: 1.5 }
    }
  }
  return <motion.div
    variants={containerVariants}
    initial="init"
    animate="visible"
    exit="exit" className='Portfolio'>
          <div className='navigation'>
      <Link to = '/Parcours'>
        <FontAwesomeIcon icon = 'arrow-left'/>
      </Link>
      <Link to = '/Contact'>
        <FontAwesomeIcon icon = 'arrow-right'/>
      </Link>

    </div>
    <div className='project'>
      <video controls>
        <source src={VideoPtut} />
      </video>
      <p className='explanation'>
        Ce projet est un projet tutoré effectué en groupe, de 3 en l'occurrence. Vous verrez ici une vidéo d'explication du projet très complète (avec un autre membre du groupe pour la voix off).
        Vous pouvez cependant aussi accéder directement au site via ce lien
      </p>
      <a href='http://easylemon.fr/' target="_blank" rel="noreferrer">
        easylemon.fr
      </a>
    </div>
    <div className='divider-container' title='César: https://codepen.io/isabelc/pen/MmrJgx pour ce beau divider'>
      <div className='divider-sizer'>

      </div>
    </div>
    <div className='project'>
      <video controls>
        <source src={VideoCpoa} />
      </video>
      <p className='explanation'>
        Ce projet est une application web gérant un tournoi de tennis. Les fonctionnalités visibles dans la vidéos sont :
        -La connexion (et l'inscription).
        -Voir le planning des matchs, ceux qui sont plannifiés etc. en fonction du jour, du cours et de l'heure.
        -La réservation d'un cours (possible seulement sur les créneaux disponibles.)
        - La réservation d'une place pour un match (dans la partie billetterie), avec calcul du prix du billet selon la place le match et le type de match, avec créaition automatique côté base de donnée du billet et actualisation du nombre de places disponibles dans un match.
        -Il y a aussi des comptes administrateurs qui permettront de gérer toutes ces données, de créer des joueurs des arbitres etc.

        Le site est seulement en local.
      </p>
    </div>
    <div className='divider-container' title='César: https://codepen.io/isabelc/pen/MmrJgx pour ce beau divider'>
      <div className='divider-sizer'>

      </div>
    </div>

  </motion.div>;
}

export default Portfolio;
