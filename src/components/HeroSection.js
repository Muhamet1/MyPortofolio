import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Typed from 'react-typed';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <Typed className='text-white text-8xl ' typeSpeed={80} strings={["HI, I'M MUHAMET HAJDINI"]} />
      <Typed  className="typed"
        strings={["WELCOME TO MY PORTOFOLIO!","I'M FULL STACK DEVELOPER ","“First, solve the problem. Then, write the code.” – John Johnson"]}
        typeSpeed={30}
        backSpeed={80}
        loop
        />    
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;