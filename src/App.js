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
      <Container>
        <h1>Hello, World!</h1>
        <Button text="Кнопка" onClick={ButtonClick}/>
      </Container>
    </>
  );
};

export default App;