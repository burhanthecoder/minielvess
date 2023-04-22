import React from "react";

function Display(props) {
  return (
    <div>
      <div style={{background: "red"}}>
        <div className="imgTshirt text-center ">
          <img
            className="img responsive w-100"
            src={props.display.tshirtImage}
            alt="imgtshirt-1"
          />
        </div>
        <div className="design-box text-center">
          <div className="upperText">
            <p className="text" style={{color:props.display.textColor,fontSize:props.display.textSize+"px"}}>{props.display.upperText}</p>
          </div>
          <img
            src={props.display.uploadImage}
            alt="uploadImage"
            className="w-50 uploadImage my-1"
          />
          <div className="lowerText mt-1">
            <p className="text" style={{color:props.display.textColor,fontSize:props.display.textSize+"px"}}>{props.display.lowerText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
