import React from "react";
import { useContext } from "react";
import DisplayMail from "../components/DisplayMail";
import Filters from "../components/Filters";
import { mailContext } from "../contexts/MailProvider";

export default function LandingPage() {
  const { displayData } = useContext(mailContext);
  return (
    <React.Fragment>
      <Filters />
      <ul>
        {displayData?.map((mail) => (
          <DisplayMail mail={mail} detail={true} />
        ))}
      </ul>
    </React.Fragment>
  );
}
