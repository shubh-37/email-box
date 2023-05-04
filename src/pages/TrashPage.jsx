import React from "react";
import { useContext } from "react";
import DisplayMail from "../components/DisplayMail";
import { mailContext } from "../contexts/MailProvider";

export default function TrashPage() {
  const { state } = useContext(mailContext);
  return (
    <React.Fragment>
      <h1>This is the trash page</h1>
      <p>{state.bin.length=== 0 ? "There are no deleted emails" : <></>}</p>
      <ul>
        {state.bin.map((mail) => (
          <DisplayMail mail={mail} detail={false} />
        ))}
      </ul>
    </React.Fragment>
  );
}
