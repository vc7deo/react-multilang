import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
function Nav() {
  const { t, i18n } = useTranslation();
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  }
  const language = i18n.language;
  return (
        <header className="mb-auto">
          <div>
            <select value={language} className="float-md-start mb-0" name="language" onChange={onChange}>
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
            <nav className="nav nav-masthead justify-content-center float-md-end">
            <Link className="nav-link active" to={`/${language}`}>Home</Link>
            <Link className="nav-link" to={`/${language}/about`}>About</Link>
            <Link className="nav-link" to={`/${language}/contact`}>Contact</Link>
            </nav>
          </div>
        </header>
  );
}

export default Nav;
