/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Form from "./Form";
import Notes from "./Notes";

const MainContent = ({ setNb, nb, theme, saveNote, notas }) => {

  const { themeBg, themeText } = theme

  return (
    <div className={`w-full md:w-10/12 bg-[${themeBg}] text-[${themeText}]`}>
      <Form themeText={themeText} setNb={setNb} nb={nb} saveNote={saveNote}/>
      <Notes notas={notas}/>
    </div>
  );
};

export default MainContent;
