import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Education from "./Education";
import Courses from "./Courses";
import Hobbies from "./Hobbies";
// basename={process.env.PUBLIC_URL}
const Main = () => {
  const handleClick = (e) => {
    const selectors = [...document.querySelectorAll("li.track")];
    const activeSelector = selectors.findIndex((selector) =>
      selector.classList.contains("active")
    );
    selectors[activeSelector].classList.remove("active");
    selectors[e.target.value].classList.add("active");
  };

  return (
    <div className="main">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="main__nav">
          <ul className="main__nav--ul">
            <Link to="/">
              <li
                className="track main__nav--ul--li active"
                onClick={handleClick}
                value={0}
              >
                Wykształcenie
              </li>
            </Link>

            <Link to="/education">
              <li
                className="track main__nav--ul--li"
                onClick={handleClick}
                value={1}
              >
                Kursy
              </li>
            </Link>

            <Link to="/hobbies">
              <li
                className="track main__nav--ul--li"
                onClick={handleClick}
                value={2}
              >
                Zainteresowania
              </li>
            </Link>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Education />} />
          <Route path="education" element={<Courses />} />
          <Route path="hobbies" element={<Hobbies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
<div></div>;
