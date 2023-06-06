import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 200); // Change the scroll threshold to 200px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scrollTop ${isVisible ? 'visible' : ''}`} // Add the 'visible' class based on isVisible state
      onClick={handleClick}
      title="Scroll to top"
    >
      <img src="images/up-icon.svg" alt="Scroll to Top" />
    </button>
  );
};

export default ScrollToTopButton;
