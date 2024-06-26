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
import Slider from './Components/Slider/Slider';
import { useState } from 'react';
import { ThemeProvider } from './Components/Theme/ThemeConntext';
import Video_animation from './Components/Video_animation/Video_animation';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
      setDarkMode(!darkMode);
  };
  return (
    // <ThemeProvider>

    <div className='bg-black'>
      <Navbar/>
      <Video/>
      <About/>
      <Video_animation/>
      <Services/>
      <Why_Us/>
      <Blogs/>
      <Slider/>
      <Questions/>
      <Map/>
      <Footer/>
    </div>
    // </ThemeProvider>
  );
}
export default App;
