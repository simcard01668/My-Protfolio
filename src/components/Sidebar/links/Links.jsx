import React from "react";

const navLinks = ["Home", "Works", "Experiece", "Tech Stack", "Contact"];
const Links = () => {
  return (
    <div className="links">
      {navLinks.map((item) => {
        return (
          <a href={`#${item}`} key={item}>
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default Links;
