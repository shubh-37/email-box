import React from "react";

export default function Filters() {
  return (
    <React.Fragment>
      <fieldset className="filter-box">
        <legend>Filters</legend>
        <label>
          <input type="checkbox" name="unread" id="" />
          Show unread emails
        </label>
        <label htmlFor="">
          <input type="checkbox" name="starred" id="" />
          Show starred emails
        </label>
      </fieldset>
    </React.Fragment>
  );
}
