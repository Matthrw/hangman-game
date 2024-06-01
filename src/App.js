import { useState } from 'react';

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

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function App() {
  const [display, setDisplay] = useState([]);
  const handleButtonClick = (letter) => {
    setDisplay((prevDisplay) => {
      if (prevDisplay.length >= 13) return prevDisplay;
      return [...prevDisplay, letter];
    });
  };

  const clearDisplay = () => {
    setDisplay([]);
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
          <Button key={index} onClick={() => handleButtonClick(letter)}>
            {letter}
          </Button>
        ))}
      </div>
      <Button onClick={clearDisplay}>clear</Button>
    </>
  );
}
