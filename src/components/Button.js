import React from 'react';
import './Button.css'; // Импортируем стили для кнопки

const Button = ({ text, onClick }) => {
  return (
    <button className="my-button" onClick={onClick}>{text}</button>
  );
};

export default Button;