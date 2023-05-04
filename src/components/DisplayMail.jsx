import { useContext } from "react";
import { Link } from "react-router-dom";
import { mailContext } from "../contexts/MailProvider";

export default function DisplayMail({ mail, detail }) {
  const { dispatch } = useContext(mailContext);
  const { mId, unread, isStarred, subject, content, isSpam } = mail;
  function onDeleteHandler(emailId) {
    console.log(emailId);
    dispatch({ type: "DELETE", payload: emailId });
  }
  return (
    <li key={mId} className="email-item">
      <div className="sub-star">
        <h2>Subject: {subject}</h2>
        {detail ? (
          <button onClick={() => dispatch({ type: "STAR", payload: mId })} className="is-star">
            {isStarred ? "Unstar" : "Star"}
          </button>
        ) : (
          <></>
        )}
      </div>
      <p>{content}</p>
      {detail ? (
        <Link to={`/email/${mId}`}>
          <button>View Details</button>
        </Link>
      ) : (
        <></>
      )}
      {detail ? (
        <div className="buttons">
          <button onClick={() => onDeleteHandler(mId)}>Delete</button>
          <button onClick={() => dispatch({ type: "READ", payload: mId })}>
            {unread ? "Mark as Read" : "Mark as Unread"}
          </button>
          <button onClick={() => dispatch({ type: "SPAM", payload: mId })}>
            {isSpam ? "Spam Reported" : "Report Spam"}
          </button>
        </div>
      ) : (
        <></>
      )}
    </li>
  );
}
