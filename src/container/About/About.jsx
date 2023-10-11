import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => {
  return (
    <>
      <h2 className="head-text"><span>Créateur</span> dans l'âme, je<span> façonne</span> le web avec une <span>passion</span> insatiable</h2>
      <br/>
      <motion.div
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className="app__profile-item"
        style={{ maxWidth: "60%", margin: "auto" }} 
      >
        <h2 className="bold-text" style={{ marginTop: 20 }}>Un peu plus sur moi</h2>
        <motion.p
          className="p-text"
          style={{ marginTop: 10 }}
          transition={{ duration: 0.5, delay: 0.5, type: 'tween' }}
        >
          Évoluant dans l'univers du MBA expert en système informatique, je ne suis pas simplement un développeur Full Stack. Chaque ligne de code que j'écris raconte une histoire, chaque projet est une aventure. Avec une prédilection pour React, Node.js, et Symfony, j'ai également navigué dans le monde mobile avec Kotlin et conçu des pépites en Next.js. Aujourd'hui, je cherche à repousser mes limites en intégrant une alternance où innovation et ambition se rencontrent.
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
