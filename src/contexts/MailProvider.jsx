import { useState } from "react";
import { createContext } from "react";

export const mailContext = createContext();

export default function MailProvider({ children }) {
  const [trash, setTrash] = useState([]);
  const [spam, setSpam] = useState([]);
  return <mailContext.Provider value={{ trash, setTrash, spam, setSpam }}>{children}</mailContext.Provider>;
}
