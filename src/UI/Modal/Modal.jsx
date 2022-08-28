import React from "react";
import "./Modal.scss";

const Modal = ({ children, visible, setVisible }) => {
  const classes = ["modal"];

  if (visible) {
    classes.push("active");
  }

  return (
    <div className={classes.join(" ")} onClick={() => setVisible(false)}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
