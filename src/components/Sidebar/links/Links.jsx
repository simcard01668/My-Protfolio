import React from "react";
import { motion } from "framer-motion";

const navLinks = ["Home", "Works", "Experiece", "Tech Stack", "Contact"];
const Links = ({animationProp}) => {
  return (
    <div className="links">
      {navLinks.map((item) => {
        return (
          <motion.a href={`#${item}`} key={item} variants={animationProp} whileHover={{scale:1.3}}>
            {item}
          </motion.a>
        );
      })}
    </div>
  );
};

export default Links;
