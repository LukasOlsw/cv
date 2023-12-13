import profilowe from "./profilowe.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__imgContainer">
        <img src={profilowe} alt="" className="header__imgContainer--img" />
      </div>
      <p className="header__name">Łukasz Olszewicz</p>
    </div>
  );
};

export default Header;
