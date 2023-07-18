/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import NoteLayout from "./NoteLayout";

const Notes = ({ notas }) => {
  return (
    <div className="flex flex-col p-2 gap-5">
      {notas.map((n) => (
        <NoteLayout data={n} key={n.id}/>
      ))}
    </div>
  );
};

export default Notes;
