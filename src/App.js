import React from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';

const ButtonClick = () => {
  alert('Кнопка нажата!');
}

function App() {
  return (
    <>
      <Container children1={
        <> 
          <h1>Hello, World!</h1>
          <Button text="Кнопка" onClick={ButtonClick}/>
        </>
      }
      children2={<p>some text</p>} />
    </>
  );
};

export default App;