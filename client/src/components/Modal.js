/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ReactDOM from 'react-dom';


const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
    <div onClick={ (e) => e.stopPropagation()} className="ui standard modal visible active" style = {{ width: 600, height: 200, top: 150, left: 500 }}>
    <div className="header">{props.title}</div>
    <div className="content">{props.content}</div>
    <div className="actions">
     {props.action}
    </div>
    </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
