import { CoreCompetencies } from './components/coreCompetencies/CoreCompetencies';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { Intro } from './components/intro/Intro';
import { Projects } from './components/projects/Projects';
import { Techs } from './components/techs/Techs';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Intro />
      <CoreCompetencies />
      <Techs />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
