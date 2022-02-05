import React from 'react';
import '../Assets/Styles/Parcours.scss'
import Condo from '../Assets/Media/condo.JPG';
import Ucbl from '../Assets/Media/ucbl.jpg';
import Choices from '../Assets/Media/Choices.jpg';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

function Parcours() {
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
  return(
  <motion.div 
  variants={containerVariants}
  initial="init"
  animate="visible"
  exit="exit"
  className='parcours'>
    <div className='navigation'>
      <Link to = '/Moi'>
        <FontAwesomeIcon icon = 'arrow-left'/>
      </Link>
      <Link to = '/Portfolio'>
        <FontAwesomeIcon icon = 'arrow-right'/>
      </Link>

    </div>
    <div className='containerStep'>
      <div className='checkpoint'>
        <FontAwesomeIcon icon="map-marker"/>
         
      </div>
      <div className='explication-text'>
      <div className='divider-container'>
              <div className='divider-sizer'>

              </div>
            </div>
          <p className = 'text'>
            J'ai passé mes années de lycée à Condorcet Saint-Priest 69800, où j'ai obtenu un bac S sciences de l'ingénieur option ISN, avec la mention bien. 
          </p>
        </div> 
      <div className='image'>
        <img src={Condo} alt='logo du lycee condorcet'/>
      </div>
    </div>
    <div className='containerStep'>
      <div className='checkpoint'>
        <FontAwesomeIcon icon="map-marker"/>
         
      </div>
      <div className='explication-text'>
      <div className='divider-container'>
              <div className='divider-sizer'>

              </div>
            </div>
          <p className = 'text'>
            Actuellement, je suis à l'université claude Bernard, Lyon 1 site la Doua afin de valider un DUT informatique. C'est en ce moment même mon 4 ème et dernier semestre.
          </p>
        </div> 
      <div className='image'>
        <img src={Ucbl} alt='logo du lycee condorcet'/>
      </div>
    </div>
    <div className='containerStep'>
      <div className='checkpoint'>
        <FontAwesomeIcon icon="map-marker"/>
         
      </div>
      <div className='explication-text'>
      <div className='divider-container'>
              <div className='divider-sizer'>

              </div>
            </div>
          <p className = 'text'>
            Ensuite, j'espère intégrer une école qui me permettra d'obtenir un diplôme d'ingénieur, en me spécialisant dans l'intelligence artificielle et la data science. Le tout en alternance :D
          </p>
        </div> 
      <div className='image'>
        <img src={Choices} alt='logo du lycee condorcet'/>
      </div>
    </div>

  </motion.div>
  )
}

export default Parcours;
