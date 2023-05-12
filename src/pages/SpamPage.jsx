import React from "react";
import { useContext } from "react";
import DisplayMail from "../components/DisplayMail";
import { mailContext } from "../contexts/MailProvider";

export default function SpamPage() {
  const { state } = useContext(mailContext);
  return (
    <React.Fragment>
      <div className="sub-parent">
      <h3>{state.spam.length === 0 ? "There are no spam emails" : <></>}</h3>
      <ul>
        {state.spam.map((mail) => (
          <DisplayMail mail={mail} detail={false} />
        ))}
      </ul>
      </div>
    </React.Fragment>
  );
}
