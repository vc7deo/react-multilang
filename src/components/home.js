import { useTranslation } from 'react-i18next';
import Nav from '../layouts/nav';

function Home() {
  const { t, i18n } = useTranslation();
  return (

    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Nav />

<main className="px-3">
<h1>{t('welcome')}</h1>
<p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
<p className="lead">
  <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark">{t('submit')}</a>
</p>
</main>
        <footer className="mt-auto text-white-50">
          <p>Cover template for <a href="https://getbootstrap.com/" className="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" className="text-white">@mdo</a>.</p>
        </footer>
      </div>
    </div>

  );
}

export default Home;
