import React from "react";
import { useContext } from "react";
import { mailContext } from "../contexts/MailProvider";

export default function Filters() {
  const {dispatch, state: { isStarredFilter, unreadFilter }, searchHandler} = useContext(mailContext);
  return (
    <React.Fragment>
      <div className="child-1">
      <fieldset className="filter-box">
        <legend style={{fontSize: "1.2rem"}}>Filters</legend>
        <label htmlFor="">
          <input type="text" name="" id="" placeholder="Search mails" onChange={(e) => searchHandler(e)}/>
        </label>
        <label style = {{margin: '0.9rem'}}>
          <input type="checkbox" name="unread" value="unread" checked ={unreadFilter} onChange={(e) => dispatch({type: "FILTER", payload: e.target.value})}/>
          Show unread emails
        </label>
        <label htmlFor="" style = {{margin: '0.9rem'}}>
          <input type="checkbox" name="starred" value="isStarred" checked= {isStarredFilter}onChange={(e) => dispatch({type: "FILTER", payload: e.target.value})}/>
          Show starred emails
        </label>
      </fieldset>
      </div>
    </React.Fragment>
  );
}
