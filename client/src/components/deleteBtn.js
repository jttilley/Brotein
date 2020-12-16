import React from "react";
import '../css/delete.css'

function DeleteBtn(props) {
    return (
      <span className="delete-btn" {...props} role="button" tabIndex="0">
        ✗
      </span>
    );
}
  
export default DeleteBtn;