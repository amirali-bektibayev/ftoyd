import React from 'react';
import './ErrorMessage.css';
import ErrorIcon from '../../assets/error-icon.svg'


const ErrorMessage: React.FC = () => {

  return <div className="error-message">
    <img src={ErrorIcon} alt="" />
    <div>Ошибка: не удалось загрузить информацию</div>
    </div>;
};

export default ErrorMessage;