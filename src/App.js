
import './Assets/Styles/App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./Components/Header";
import Home from './Components/Home';
import Moi from './Components/Moi';
import Footer from './Components/Footer';
import {AnimatePresence} from 'framer-motion';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faHome, faArrowRight, faFileDownload, faArrowLeft, faMapMarker, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Portfolio from './Components/Portfolio';

import Parcours from './Components/Parcours';
import Contact from './Components/Contact';
library.add(fab, faCheckSquare, faHome, faArrowRight, faFileDownload, faArrowLeft, faMapMarker, faArrowUp)
function App() {

  const location = useLocation();
  return (
    <div className="App">
       
        <Header />
        <AnimatePresence exitBeforeEnter>

        <Routes location={location} key={location.key}>
          <Route path='/' element={<Home />} />
          <Route path='/Moi' element={<Moi />} />
          <Route path='/Parcours' element={<Parcours />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        </AnimatePresence>
      <Footer />
      
      
    </div>
  );
}

export default App;
