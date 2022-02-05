import React from 'react';
import emailjs from "emailjs-com";
import '../Assets/Styles/Contact.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_atkptsi', 'template_0rtz0y2', e.target, 'user_98Ubkye4jjq1ReTmOpWui')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }
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
  exit="exit"
  className='Contact'>
        <div className='navigation'>
      <Link to = '/Portfolio'>
        <FontAwesomeIcon icon = 'arrow-left'/>
      </Link>
      <Link to = '/'>
        <FontAwesomeIcon icon = 'arrow-right'/>
      </Link>

    </div>
    <form className="form" onSubmit={sendEmail}>
      <h2>CONTACT</h2>
      <p type="Name:"><input placeholder="Que je sache à qui je m'adresse*" name='from_name' required='required'></input></p>
      <p type="Email:"><input placeholder="Que je puisse vous répondre*" name='from_email' required='required'></input></p>
      <p type="Message:"><input placeholder="Une proposition, une question ...*" name='message' required='required'></input></p>
      <button>Send Message</button>
      <div>
        <span className="fa fa-phone"></span>0618481488
        <span className="fa fa-envelope-o"></span> spina.sandro69@gmail.com
      </div>
    </form>
  </motion.div>;
}

export default Contact;
