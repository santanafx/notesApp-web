import { ChangeEvent, useState } from "react";
import Draggable from "react-draggable";
import Add from "../../components/molecules/Add/Add";
import Note from "../../components/molecules/Note/Note";
import { HomePageTemplate } from "../../components/templates/HomePageTemplate/HomePageTemplate";
import { NoteType } from "./HomePage.interface";

export const HomePage = () => {
  const [noteId, setNoteId] = useState(0);
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [tempNotes, setTempNotes] = useState<NoteType[]>([]);
  const [activeDrags, setActiveDrags] = useState(0);

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const handleAddNote = () => {
    const newNotes = [...notes];
    newNotes.push({ content: "", id: noteId });
    setNotes(newNotes);
    setNoteId((prev) => prev + 1);
  };

  const handleAddContent = (
    note: NoteType,
    index: number,
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newTempNotes = [...tempNotes];
    newTempNotes[index] = { ...note, content: e.target.value };
    setTempNotes(newTempNotes);
  };

  const handleRemoveNote = (id: number) => {
    const newTempNotes = tempNotes.filter((note) => note.id !== id);
    setNotes(newTempNotes);
    setTempNotes(newTempNotes);
  };

  const dragHandlers = { onStart, onStop };

  return (
    <HomePageTemplate
      addButton={<Add onClick={() => handleAddNote()} />}
      content={
        <>
          {notes.map((note, index) => (
            <Draggable {...dragHandlers} key={`${note.content}_${index}`}>
              <div className="box">
                <Note
                  content={note.content ?? ""}
                  onChange={(e) => handleAddContent(note, index, e)}
                  onClick={() => handleRemoveNote(note.id)}
                />
              </div>
            </Draggable>
          ))}
        </>
      }
    />
  );
};
