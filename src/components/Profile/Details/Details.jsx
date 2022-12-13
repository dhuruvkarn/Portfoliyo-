import React from "react";
// import { useHistory } from "react-router";
import style from "./detail.module.css";

function Details() {
  // const history = useHistory();

  return (
    <div className={style.detailsbody}>
      <div className={style.contentbody}>
        <div className={style.smalldiv}>
          <p className={style.hi}>Hi, I am</p>
          <h1 className={style.name}>Deepak Kumar Karn</h1>
          <p className={style.fullstack}>
            Frontend Web Developer | Competitive programmer
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1gX0JlTYktt0qe-xtt7KuCgspa87A7DEc/view?usp=sharing"
          >
            <button className={style.resume}>RESUME</button>
          </a>
          <div style={{ marginTop: "20px" }}>
            <a target="_blank" href="https://github.com/dhuruvkarn">
              <img
                className={style.github}
                src="/github.svg"
                alt="github"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-kumar-karn/"
              target="_blank"
            >
              <img
                className={style.linkedin}
                src="/linkedin.svg"
                alt="linkedin"
              />
            </a>

            {/* <a target="_blank" href="https://twitter.com/Ashish__Shaw">
              <img className={style.twitter} src="/twitter.gif" alt="twitter" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
