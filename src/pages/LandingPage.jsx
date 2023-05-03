import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";

export default function LandingPage({ mails }) {
  function reducer(state, action) {
    console.log(action, state);
    switch (action.type) {
      case "STAR": {
        return state.reduce(
          (acc, mail) =>
            mail.mId === action.payload ? [...acc, { ...mail, isStarred: !mail.isStarred }] : [...acc, mail],
          []
        );
      }
      case "DELETE": {
        return state.filter(({ mId }) => mId !== action.payload);
      }
      case "SPAM": {
        return state.reduce(
          (acc, mail) => (mail.mId === action.payload ? [...acc, { ...mail, isSpam: true }] : [...acc, mail]),
          []
        );
      }
      case "READ": {
        return state.reduce(
          (acc, mail) => (mail.mId === action.payload ? [...acc, { ...mail, unread: !mail.unread }] : [...acc, mail]),
          []
        );
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, mails);

  function onDeleteHandler(emailId) {
    console.log(emailId);
    dispatch({ type: "DELETE", payload: emailId });
  }
  return (
    <React.Fragment>
      <Filters />
      <ul>
        {state.map(({ mId, unread, isStarred, subject, content, isSpam }) => (
          <li key={mId} className="email-item">
            <div className="sub-star">
              <h2>Subject: {subject}</h2>
              <button onClick={() => dispatch({ type: "STAR", payload: mId })} className="is-star">
                {isStarred ? "Unstar" : "Star"}
              </button>
            </div>
            <p>{content}</p>
            <Link to={`/email/${mId}`}>
              <button>View Details</button>
            </Link>
            <div className="buttons">
              <button onClick={() => onDeleteHandler(mId)}>Delete</button>
              <button onClick={() => dispatch({ type: "READ", payload: mId })}>
                {unread ? "Mark as Read" : "Mark as Unread"}
              </button>
              <button onClick={() => dispatch({ type: "SPAM", payload: mId })}>
                {isSpam ? "Spam Reported" : "Report Spam"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
