import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import {theme} from './CustomTheme'
import {
   createTheme,
   responsiveFontSizes,
   ThemeProvider,
} from '@mui/material/styles';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Router>
            <Navbar />
            <Routes>
               <Route exact path="/jobApp" element={<Home />} />
               <Route exact path="/jobs" element={<Jobs />} />
               <Route exact path="/about" element={<About />} />
               <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
         </Router>
      </ThemeProvider>
   );
}

export default App;
