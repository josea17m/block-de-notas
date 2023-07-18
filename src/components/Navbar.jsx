/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import { useSwipeable } from "react-swipeable";

const Navbar = ({ nb, setNb, theme, switchTheme }) => {

  const { themeBg, themeText } = theme

  const handlers = useSwipeable({
    trackMouse: true,
    onSwipedLeft: () => setNb(false),
  });

  return (
    <nav
      {...handlers}
      className={`${
        nb ? "w-10/12" : "w-0 md:w-2/12"
      } ${themeBg} ${themeText} py-2 h-full flex flex-col justify-between absolute overflow-hidden text-white`}
    >
      <h2 className="border-b text-center py-2">
        Etiquetas
      </h2>
      <div>etiquetas...</div>
      <button onClick={switchTheme}>Dark mode</button>
    </nav>
  );
};

export default Navbar;
