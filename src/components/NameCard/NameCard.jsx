import React from "react";
import "./NameCard.css";

const NameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";
const NameCard = ({ suggestedName }) => {
  return (
    <a
      className="name-link"
      href={`${NameCheapUrl}${suggestedName}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="name-card">
        <p className="result-name-card">{suggestedName}</p>
      </div>
    </a>
  );
};
export default NameCard;
