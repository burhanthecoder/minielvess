import React from "react";
const black =
  "https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/reebonz-prada-t-shirt-dark-blue-ujm564-710-f0124-prada-1-5d6c6373-c1e7-4cd5-a38d-2c7f8076bed1_t1x7ex.jpg";
const blue =
  "https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/AyeGear_T5_tshirt_with_pockets_clothing_fashion_style_hiking_fishing_cycling_scottevest_pickpocket_proof_concealed5_ds1cac.jpg";
const white =
  "https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/Cotton-Tshirt-600x600_mxohxt.jpg";
const red =
  "https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/mens-round-neck-t-shirt-500x500_sm3xsu.jpg";

function Setting({
  color,
  upperText,
  lowerText,
  textColor,
  textSize,
  uploadImage
}) {
  return (
    <div className="card bg-light container py-2">
      <h3 className="text-center">Setting</h3>
      <hr style={{ border: "1px solid black" }} />
      <h5>Change T-Shirt color</h5>
      <div className="imgsBox d-flex justify-content-around">
        <img onClick={color} src={black} alt="blackShirt" width="55px" />
        <img onClick={color} src={blue} alt="blueShirt" width="60px" />
        <img onClick={color} src={white} alt="whiteShirt" width="60px" />
        <img onClick={color} src={red} alt="redShirt" width="60px" />
      </div>
      <hr style={{ border: "1px solid #ccc" }} />
      <h5>Upload Image</h5>
      <div className="row">
        <form>
          <div className="col-8">
            <input type="file" onChange={uploadImage} />
          </div>
          <div className="col-4">
            <button
              type="btn"
              className="btn btn-info rounded my-2"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
      
      <hr style={{ border: "1px solid #ccc" }} />
      <div className="writeText">
        <h5>Write Text</h5>
        <p>Upper Text</p>
        <input
          type="text"
          className="uppertext form-control border-0 shadow-sm bg-white rounded mb-2"
          onChange={upperText}
        />
        <p>Lower Text</p>
        <input
          type="text"
          className="lowertext form-control border-0 shadow-sm bg-white rounded mb-2"
          onChange={lowerText}
        />
      </div>
      <hr style={{ border: "1px solid #ccc" }} />
      <div className="textDecoration">
        <div className="row">
          <div className="text-size col-6">
            <p>Text Size</p>
            <input type="range" onChange={textSize} min="10" max="30" />
          </div>
          <div className="text-color col-6">
            <p>Text-color</p>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="Black"
                  onChange={textColor}
                />
                Black
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="white"
                  onChange={textColor}
                />
                White
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="Blue"
                  onChange={textColor}
                />
                Blue
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="color"
                  id="textColor"
                  value="Red"
                  onChange={textColor}
                />
                Red
              </label>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary my-3 rounded">Save</button>
    </div>
  );
}

export default Setting;
