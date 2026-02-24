import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Banner } from './components/Banner/Banner';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Products } from './components/Products/Products';
import { TopProducts } from './components/TopProducts/TopProducts';



function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
      AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    }),
    AOS.refresh();
  },[]);

  const [isdark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isdark);
  }

  return (
    <>
    <div className={isdark ? "light" : "dark"}>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} isdark={isdark} toggleTheme={toggleTheme} />
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
    </div>
    </div>
    </>
  
  );
}

export default App;


