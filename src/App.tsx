import { Header } from './components/header/Header';
import { Intro } from './components/intro/Intro';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Intro />
    </div>
  );
}

export default App;
