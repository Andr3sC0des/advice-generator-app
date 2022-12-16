import React from "react"

const Attribution = () => {
    return(
        <>
  {/* ----------------------------- ATTRIBUTION ----------------------------- */}
  <label htmlFor="flag">
    <div className="flag__button">
      <span>
        <i className="fa-brands fa-creative-commons-by" />
      </span>
    </div>
    <input type="checkbox" className="flag__check" id="flag" hidden="" />
    <div className="flag">
      <div className="flag__attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
          target="_blank"
        >
          Frontend Mentor
        </a>{" "}
        <br />
        Coded by{" "}
        <a href="https://andr3sc0des.github.io" target="_blank">
          Andr3sC0des
        </a>
        .
      </div>
    </div>
  </label>
  {/* --------------------------- END ATTRIBUTION --------------------------- */}
</>

    );
}

export default Attribution