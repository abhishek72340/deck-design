import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { PropTypes } from "prop-types";
const teamUpContext = createContext();

const TeamUpProvider = ({ children }) => {
  const [callButton, setCallButton] = useState(false);
  const [contactButton, setContactButton] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  //   handler for first btn
  const callusMouseEnterHandler = () => {
    console.log("Mouse entered");
    setCallButton(true);
  };
  const callusMouseRemoveHandler = () => {
    setCallButton(false);
  };

  //   handler for second btn
  const contactMouseEnterHandler = () => {
    setContactButton(true);
  };
  const contactMouseRemoveHandler = () => {
    setContactButton(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <teamUpContext.Provider
      value={{
        callusMouseEnterHandler,
        callusMouseRemoveHandler,
        contactMouseEnterHandler,
        contactMouseRemoveHandler,
        callButton,
        contactButton,
        scrollY,
      }}
    >
      {children}
    </teamUpContext.Provider>
  );
};

TeamUpProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

const useTeam = () => useContext(teamUpContext);
export { useTeam, TeamUpProvider };
