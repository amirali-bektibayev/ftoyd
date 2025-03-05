import React from 'react';
import './RefreshButton.css';
import RefreshIcon from '../../assets/refresh-icon.png'

interface RefreshButtonProps {
  onRefresh: () => void; 
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onRefresh }) => {
  return (
    <button className="refresh-button" onClick={onRefresh}>
      <span className="refresh-button__text">Обновить</span>
      <span className="refresh-button__icon">
        <img src={RefreshIcon} />
      </span>
    </button>
  );
};

export default RefreshButton;