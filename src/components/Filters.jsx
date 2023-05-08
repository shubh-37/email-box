import React from "react";
import { useContext } from "react";
import { mailContext } from "../contexts/MailProvider";

export default function Filters() {
  const {dispatch, state: { isStarredFilter, unreadFilter }} = useContext(mailContext);
  return (
    <React.Fragment>
      <fieldset className="filter-box">
        <legend>Filters</legend>
        <label>
          <input type="checkbox" name="unread" value="unread" checked ={unreadFilter} onChange={(e) => dispatch({type: "FILTER", payload: e.target.value})}/>
          Show unread emails
        </label>
        <label htmlFor="">
          <input type="checkbox" name="starred" value="isStarred" checked= {isStarredFilter}onChange={(e) => dispatch({type: "FILTER", payload: e.target.value})}/>
          Show starred emails
        </label>
      </fieldset>
    </React.Fragment>
  );
}
