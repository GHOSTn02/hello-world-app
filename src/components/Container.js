import React from 'react';
import './Container.css'; // Импортируем стили для контейнера

const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;