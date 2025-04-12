import React from 'react';
import './Container.css'; // Импортируем стили для контейнера
import './Separator.css'; // Интегрируем стили для разделителя

const Container = ({ children1, children2 }) => {
  return (
    <div className="container">
      {children1}
      <div class="separator"></div>
      {children2}
    </div>
  );
};

export default Container;