import React, { useState } from 'react';

const alphabeth = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export default function App() {
  const [display, setDisplay] = useState([]);

  const handleButtonClick = (letter) => {
    setDisplay((prevDisplay) => {
      // Check if display array has reached the maximum length (13)
      if (prevDisplay.length >= 13) return prevDisplay;
      return [...prevDisplay, letter];
    });
  };

  return (
    <>
      <div className='empty-box-container'>
        {Array.from({ length: 13 }, (_, index) => (
          <div className='empty-box' key={index}>
            {display[index] ? display[index] : ''}
          </div>
        ))}
      </div>
      <div className='keyboard'>
        {alphabeth.map((letter, index) => (
          <button key={index} onClick={() => handleButtonClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
    </>
  );
}
