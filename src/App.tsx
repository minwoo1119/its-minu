import { CoreCompetencies } from './components/coreCompetencies/CoreCompetencies';
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
    </div>
  );
}

export default App;
