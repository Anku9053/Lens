import logo from './logo.svg';
import './App.css';
import Video from './Components/Video/Video';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Why_Us from './Components/Why_Choose_Us/Why_Us';
import Blogs from './Components/Blogs/Blogs';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
import { Questions } from './Components/Questions/Questions';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className='bg-black' >
      <Navbar/>
      <Video/>
      <About/>
      <Services/>
      <Why_Us/>
      <Blogs/>
      <Questions/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
