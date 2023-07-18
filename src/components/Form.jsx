/* eslint-disable no-unused-vars */
import { useState } from "react";

/* eslint-disable react/prop-types */
const Form = ({ setNb, nb, saveNote, themeText }) => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [etiqueta, setEtiqueta] = useState("");

  const generarId = () => {
    const id = Date.now().toString(36);
    return id;
  };

  let tituloValue = () => {
    return document.getElementById("titulo").innerText;
  };
  const tituloClean = () => {
    return (document.getElementById("titulo").innerText = "");
  };

  let divValue = () => {
    return document.getElementById("textarea").innerText;
  };
  const divClean = () => {
    return (document.getElementById("textarea").innerText = "");
  };

  const handleSumbit = (nota) => {
    let notaNueva = {
      titulo,
      descripcion,
      etiqueta,
    };
    notaNueva.id = generarId();
    saveNote(notaNueva);

    // if (etiqueta) {
    // //   let etiquetaNueva = {
    // //     etiqueta,
    // //   };
    // //   etiquetaNueva.id = generarIdEtiqueta();

    // //   if (!etiquetas.includes("")) {
    // //     if (
    // //       etiquetas.some(function (e) {
    // //         return e.etiqueta == etiqueta;
    // //       })
    // //     ) {
    // //       setEtiquetas([...etiquetas]);
    // //       divClean();
    // //       setDescripcion("");
    // //       setEtiqueta("");
    // //       return;
    // //     }
    // //   }

    // //   setEtiquetas([...etiquetas, etiquetaNueva]);
    // //   divClean();
    // //   setDescripcion("");
    // //   setEtiqueta("");
    // //   return;
    // }
    divClean();
    tituloClean();
    setDescripcion("");
    setEtiqueta("");
    setTitulo("");
  };

  return (
    <div className="flex z-30 items-center">
      <svg onClick={() => setNb(!nb)} width="48" height="72" viewBox="0 0 24 24" fill={`${themeText}`}>
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4ZM15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19ZM12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z"
            fill={`${themeText}`}
          ></path>
        </g>
      </svg>
      <form className="border-[1px] border-[#5f6368] shadow-2xl p-2 bg-[#2b2c2e] rounded-xl w-9/12 md:w-1/2 mx-auto my-5">
        <div
          className="w-full outline-none textarea pb-2 pt-1"
          contentEditable
          placeholder="Título"
          id="titulo"
          onInput={() => setTitulo(tituloValue())}
        ></div>
        <div
          className="w-full  outline-none textarea pb-2 pt-1"
          contentEditable
          placeholder="Escribe algo..."
          id="textarea"
          onInput={() => setDescripcion(divValue())}
        ></div>
        <div className="flex justify-between gap-5">
          <input className="bg-[#2b2c2e] w-full" type="text" placeholder="" />
          <input
            className="hover:bg-[#303133] cursor-pointer duration-150"
            type="button"
            value="Guardar"
            onClick={handleSumbit}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
