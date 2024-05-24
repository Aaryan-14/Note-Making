import { useState } from "react";
import "./note.css";
import NotePreview from "../NotePreview/notePreview";
import PropTypes from "prop-types";



const Note = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="note-card-container">
      <div
        className={`note-card ${note?.bg}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="note-content">
          <h3>{note?.title}</h3>
          <p>{note?.content}</p>
        </div>
        {note?.label?.length !== 0 && (
          <div className="note-label-container">
          {/* eslint-disable-next-line no-unsafe-optional-chaining */}
            {[...note?.label].map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        )}
        {note?.editedAt ? (
          <p>Edited At: {note?.editedAt}</p>
        ) : (
          <p>Created At: {note?.createdAt}</p>
        )}
      </div>
      {isOpen && <NotePreview note={note} setIsOpen={setIsOpen} />}
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    label: PropTypes.string,
    editedAt: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Note;
