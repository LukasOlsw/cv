import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="main__nav">
      <Link to="*">
        <p>test</p>
      </Link>
      <ul className="main__nav--ul">
        <Link to="/education">
          <li>Kursy</li>
        </Link>

        <Link to="/hobbies">
          <li>Zainteresowania</li>
        </Link>
      </ul>
    </div>
  );
};

export default MainNavigation;
