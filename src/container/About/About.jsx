import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  return (
    <>
      <h2 className="head-text">Je suis un <span>passionné de création</span> et possède une<br /><span> grande </span>soif d'apprentissage</h2>
      <br/>
      <motion.div
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__profile-item"
        style={{ maxWidth: "60%", margin: "auto" }} 
      >
        <h2 className="bold-text" style={{ marginTop: 20 }}>À propos de moi</h2>
        <motion.p
          className="p-text"
          style={{ marginTop: 10 }}
          transition={{ duration: 0.5, delay: 0.5, type: 'tween' }}
        >
          Actuellement étudiant en Bachelor Concepteur de Solutions Digitales à l'école IRIS Informatique, je me passionne pour le vaste univers des technologies et consacre une grande partie de mon temps à l'exploration constante des innovations dans ce domaine. Fort de cette aspiration à approfondir sans cesse mes connaissances et à élargir le spectre de mes compétences, je suis en quête d'une alternance pour la prochaine rentrée. Mes centres d'intérêt sont vastes et couvrent le développement web, l'intelligence artificielle, le Big Data, entre autres.
        </motion.p>
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
