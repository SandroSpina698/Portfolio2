import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../Assets/Styles/Moi.scss';
import Loisirs from '../Assets/Media/coding.png';
import Equilibre from '../Assets/Media/equilibre.jpg';
import Puzzle from '../Assets/Media/Puzzle.jpg';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Moi() {



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


  const Section = (props) => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
      if (inView) {
        animation.start('visible');
      }
      if (!inView) {
        animation.start('hidden');
      }
    }, [animation, inView]);

    const articleVariants = {
      hidden: { scale: 0 },
      visible: {
        scale: 1,
        transition: {
          duration: 1
        }
      }
    }

    return (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={animation}
          variants={articleVariants}
          className='part'>

          <div className='title-section'>
            <h1 className='title'>
              {props.title}
            </h1>
            <div className='divider-container' title='César: https://codepen.io/isabelc/pen/MmrJgx pour ce beau divider'>
              <div className='divider-sizer'>

              </div>
            </div>
          </div>



          <div className='part-content'>
            <div className="image-part">
              <img src={props.img} />
            </div>

            <div className='text'>
              <p className='part-explanation'> {props.text1} </p>
              <p className='part-explanation'>{props.text2}</p>
              <p className='part-explanation'>{props.text3}</p>
            </div>

          </div>
        </motion.div>
    );
  }


  return <motion.div
    variants={containerVariants}
    initial="init"
    animate="visible"
    exit="exit"
    className='Moi'
  >
    <div className='introText'>
      <Link to="/">
        <FontAwesomeIcon icon="arrow-left" className="arrow" />
      </Link>
      <p>
        Je suis un étudiant en deuxième année de DUT informatique  à l'Université Lyon 1 site la Doua.
      </p>
      <p>
        Actuellement à la recherche d'un stage dans l'informatique
      </p>
      <p>
        (privilégiant l'IA, étant mon projet d'avenir, cependant ouvert à tous les autres domaines)

      </p>
      <p>
        j'ai créé ce site dans l'objectif de donner des informations utiles sur moi à de potentiels employeurs.
        En éspérant que j'accomplirai ma tâche.

      </p>
      <Link to="/Parcours">
        <FontAwesomeIcon icon="arrow-right" className="arrow" />
      </Link>
    </div>
    
    <div className="mouse_scroll">

		<div className="mouse">
			<div className="wheel"></div>
		</div>
		<div>
			<span className="m_scroll_arrows unu"></span>
			<span className="m_scroll_arrows doi"></span>
			<span className="m_scroll_arrows trei"></span>
		</div>
</div>

    <Section
      title='Mes loisirs'
      img={Loisirs}
      text1="CODER bien sûr est une des activités que j'aime accomplir, et c'est pour ça que je veux m'orienter là dedans. Ce que j'aime là dedans c'est l'aspect créatif de la chose, avoir une idée et la voir s'accomplir. Pour l'instant c'est dans le développement web que je me plais à investir mon temps, mais l'algorithmique plus complexe comme les structures de données par exemple me plaît au moins tout autant."

      text2="La pratique du SPORT est un loisir qui me tient énormément à coeur. J'en ai fait un grand nombre du tennis à la musculation en passant par le football et la natation. je pense que la phrase de Juvénal 'un esprit sain dans un corps sain' n'est pas à sous estimer."

      text3="La MUSIQUE me tient aussi énormément à coeur, j'aime en jouer comme au piano, la créer mais aussi et bien sûr l'écouter."
    />

    <Section title='Mes valeurs'
      img={Equilibre}
      text1="Je pense que mettre en avant mes valeurs est un des moyens les plus efficaces pour comprendre la personne que je suis réellement."

      text2="Pour moi, tout est une question d'équilibre de vie. Un rapport correct entre travail, loisirs, social et introspection."

      text3="J'accorde une place très importante à ma famille et au soutien que j'espère leur apporter. Le TRAVAIL est selon moi indispensable et lorqu'il est bien accompli, une source de satisfaction immense. Mais tout ça ne devrait pas entâcher ma santé mentale et physique, même s'il m'arrive souvent de trop en faire."
    />

    <Section title='Ce que je peux apporter'
      img={Puzzle}
      text1="Je pense que malgré un âge entraînant une expérience relativement faible, je peux apporter quelque chose."

      text2="En effet, je suis quelqu'un qui peut faire preuve d'une grande rigueur quand une mission m'est confiée. Je ferai de mon mieux pour l'accomplir et ce de la meilleure façon possible. De plus, j'ai l'habitude de l'auto-formation et donc de l'abnégation. Le développement web, le piano, le dessin sont tant de domaines sur lesquels je suis (au moins majoritairement) autodidacte."

      text3="De plus, je n'ai aucun problème avec la sociabilisation et je m'adapte facilement dans les équipes ! 😄 "
    />



  </motion.div>;
}

export default Moi;
