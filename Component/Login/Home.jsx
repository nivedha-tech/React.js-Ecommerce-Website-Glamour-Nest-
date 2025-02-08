import React, { useState, useEffect } from 'react';
import './home.css'; // Import your custom CSS here
import carouselImage1 from '../Assets/carousel-1.jpg';
import carouselImage2 from '../Assets/carousel-2.jpg'; // Add the second image import

// Carousel Component
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      imgSrc: carouselImage1,  // Use the imported image here
      title: 'Find The Perfect Job That You Deserved',
      description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.',
    },
    {
      imgSrc: carouselImage2,  // Use the imported image here
      title: 'Find The Best Startup Job That Fit You',
      description: 'Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.',
    }
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <img className="carousel-image" src={slide.imgSrc} alt={`carousel-${index}`} />
            <div className="overlay">
              <div className="carousel-content">
                <h1 className="carousel-title">{slide.title}</h1>
                <p className="carousel-description">{slide.description}</p>
                <a href="#" className="carousel-button primary">Search A Job</a>
                <a href="#" className="carousel-button secondary">Find A Talent</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Search Component
const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('Category');
  const [location, setLocation] = useState('Location');

  const handleSearch = () => {
    console.log('Searching with:', { keyword, category, location });
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <div className="search-field">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Keyword" 
            value={keyword} 
            onChange={(e) => setKeyword(e.target.value)} 
          />
        </div>
        <div className="search-field">
          <select 
            className="search-select" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Category</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
          </select>
        </div>
        <div className="search-field">
          <select 
            className="search-select" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Location</option>
            <option value="1">Location 1</option>
            <option value="2">Location 2</option>
            <option value="3">Location 3</option>
          </select>
        </div>
        <div className="search-field">
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

// App Component (Main Component)
const App = () => {
  return (
    <div>
      <Carousel />
      <Search />
    </div>
  );
};

export default App;
