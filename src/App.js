import './App.css';
import About from './components/about/About';
import Core from './components/core/Core';
import Faculty from './components/faculty/Faculty';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
// import Recruitment from './components/recruitment/Recruitment';
import Vision from './components/vision/Vision';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Vision />
      {/* <Recruitment /> */}
      <Faculty />
      <Core />
      <Footer />
    </div>
  );
}

export default App;
