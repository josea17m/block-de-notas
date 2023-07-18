/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const NoteLayout = ({ data }) => {

  const { titulo, descripcion, etiqueta } = data
  return (
    <div className="w-full max-h-48 p-3 rounded-xl overflow-hidden border-[#5f6368] border">
      <h4 className="text-[22px] mb-4">{titulo || "Titulo"}</h4>
      <div className="p-2 pl-0 hola" role="textbox" aria-multiline={true}>
      {descripcion}
      </div>
    </div>
  );
};

export default NoteLayout;
