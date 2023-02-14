import './App.css';

import Navigation from './components/navigation/Navigation';
import Introduction from './components/introduction/Introduction';
import About from './components/about/About';
import News from './components/news/News';
import Publication from './components/publication/Publication';
import Conference from './components/conference/Conference';
import Awards from './components/award/Award';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Introduction />
      <About />
      <News />
      <Publication />
      <Conference />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;
