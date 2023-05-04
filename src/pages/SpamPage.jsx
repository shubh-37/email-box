import React from "react";
import { useContext } from "react";
import DisplayMail from "../components/DisplayMail";
import { mailContext } from "../contexts/MailProvider";

export default function SpamPage() {
  const { state } = useContext(mailContext);
  return (
    <React.Fragment>
      <h1>This is the spam page</h1>
      <p>{state.spam.length === 0 ? "There are no spam emails" : <></>}</p>
      <ul>
        {state.spam.map((mail) => (
          <DisplayMail mail={mail} detail={false} />
        ))}
      </ul>
    </React.Fragment>
  );
}
