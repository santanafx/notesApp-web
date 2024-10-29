import { ChangeEventHandler } from "react";

export interface NotesProps {
  content: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onClick: () => void;
}
