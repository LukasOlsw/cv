const Courses = () => {
  return (
    <div className="education">
      <div className="education__container">
        <h1>Platforma Studiuje.it</h1>
        <p className="education__container--text strong">2023 styczeń-luty</p>
        <p className="education__container--text strong">
          Podstawy Web Developmentu
        </p>
        <p className="education__container--text">
          Tworzenie stron internetowych w oparciu o technologie HTML i CSS.
        </p>
      </div>

      <div className="education__container">
        <p className="education__container--text strong">
          Frontend średniozaawansowany
        </p>
        <p className="education__container--text">
          Tworzenie layoutów w oparciu o CSS Grid i CSS Flexbox.
        </p>
        <p className="education__container--text">
          Budowanie animacji i interakcji za pomocą CSS Animation.
        </p>
        <p className="education__container--text">
          Manipulacja DOM przy użyciu JavaScript.
        </p>
      </div>

      <div className="education__container">
        <p className="education__container--text strong">2023 marzec</p>
        <p className="education__container--text strong">
          JavaScript od podstaw
        </p>
        <p className="education__container--text">
          Programowanie strukturalne oraz obiektowe w JavaScript.
        </p>
      </div>

      <div className="education__container">
        <h1>Platforma Udemy.com</h1>
        <p className="education__container--text strong">2023 lipiec</p>
        <p className="education__container--text strong">
          Zaawansowane projekty w CSS i JavaScript
        </p>
        <p className="education__container--text">
          Metodologia BEM, Preprocesor Sass, AJAX, Node.js, NPM
        </p>
      </div>

      <div className="education__container">
        <p className="education__container--text strong">2023 październik</p>
        <p className="education__container--text strong">React od podstaw</p>

        <div className="education__container">
          <p className="education__container--text strong">
            2023 listopad-grudzień
          </p>
          <p className="education__container--text strong">
            Praktyczny kurs testowania oprogramowania
          </p>
          <p className="education__container--text strong">
            Kurs Jira od podstaw – zarządzanie projektami
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
