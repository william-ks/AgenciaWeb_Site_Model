import './App.css';
import SubHeader from './Components/SubHeader/index';
import ChangeButton from './Components/ChangeTheme';
import Phrase from './Components/Phrase';
import Works from './Components/Works';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <SubHeader />
      <ChangeButton />
      <Phrase>
        "Sua satisfação é a nossa alegria !"
      </Phrase>
      <Works />
      <Team />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
