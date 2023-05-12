import React from "react";
import { useContext } from "react";
import DisplayMail from "../components/DisplayMail";
import Filters from "../components/Filters";
import { mailContext } from "../contexts/MailProvider";

export default function LandingPage() {
  const { displayData } = useContext(mailContext);
  return (
    <React.Fragment>
      <div className="sub-parent">
        <Filters />
        <div className="child-2">
          <ul className="email-list">
            {displayData?.map((mail) => (
              <DisplayMail mail={mail} detail={true} />
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
