const Aside = () => {
  const skillsinfo = [
    {
      id: 1,
      text: "- Pakiet Office (Word, Excel VBA, Access, itp.)",
    },
    {
      id: 2,
      text: "- Tworzenie Aplikacji Webowych (HTML, CSS, JS)",
    },
    {
      id: 3,
      text: "- Testowanie oprogramowania z wykorzystaniem Jira",
    },
    {
      id: 4,
      text: "- Znajomość SQL",
    },
    {
      id: 5,
      text: "- Angielski poziom b1",
    },
    {
      id: 6,
      text: "- Prawo jazdy kat. B",
    },
  ];
  return (
    <div className="aside">
      <div className="aside__contact">
        <div className="iconContainer">
          <i class="fa-solid fa-location-dot"></i>
          <p className="aside__contact--location">Łódź</p>
        </div>

        <div className="iconContainer">
          <i class="fa-solid fa-phone"></i>
          <p className="aside__contact--phone">798-249-214</p>
        </div>

        <div className="iconContainer">
          <i class="fa-regular fa-envelope"></i>
          <p className="aside__contact--email">lukasz.olszewicz@gmail.com</p>
        </div>
      </div>

      <div className="aside__skills">
        <p className="aside__skills--label">Umiejętności</p>
        <ul className="aside__skills--ul">
          <li className="aside__skills--ul--li">{skillsinfo[0].text}</li>
          <li className="aside__skills--ul--li">{skillsinfo[1].text}</li>
          <li className="aside__skills--ul--li">{skillsinfo[2].text}</li>
          <li className="aside__skills--ul--li">{skillsinfo[3].text}</li>
          <li className="aside__skills--ul--li">{skillsinfo[4].text}</li>
          <li className="aside__skills--ul--li">{skillsinfo[5].text}</li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
