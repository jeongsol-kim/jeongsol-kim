import './App.css';

import Navigation from './components/navigation/Navigation';
import Introduction from './components/introduction/Introduction';
import About from './components/about/About';
import News from './components/news/News';
import Publication from './components/publication/Publication';
import Education from './components/education/Education';
// import Conference from './components/conference/Conference';
import Awards from './components/award/Award';
import Footer from './components/footer/Footer';
import { useRef } from 'react';

function App() {
  const introSection = useRef(null)
  const aboutSection = useRef(null)
  const eduSection = useRef(null)
  const newSection = useRef(null)
  const pubSection = useRef(null)
  const awardSection = useRef(null)

  const refs = {
    'intro': introSection,
    'about': aboutSection,
    'edu': eduSection,
    'news': newSection,
    'pub' : pubSection,
    'award': awardSection
  };

  return (
    <div>
      <Navigation ref={refs}/>
      <Introduction ref={introSection}/>
      <About ref={aboutSection}/>
      <Education ref={eduSection}/>
      <News ref={newSection}/>
      <Publication ref={pubSection}/>
      {/* <Conference /> */}
      <Awards ref={awardSection}/>
      <Footer />
    </div>
  );
}

export default App;
