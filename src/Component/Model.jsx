import React, { Component } from "react";
import dataGlassees from "./../data/dataGlasses.json";
export default class Model extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center mt-5">
          <div className="chomeo col-4 px-4">
            <img
              src="./glassesImage/model.jpg"
              style={{ height: "400px", width: "300px" }}
            />
          </div>
          <div className="chomeo col-4 px-4">
            <img
              src="./glassesImage/model.jpg"
              style={{ height: "400px", width: "300px" }}
            />
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            {dataGlassees.map((icon, index) => {
              return (
                <div className="col-2 " key={index}>
                  <img
                    className="w-100 h-100 border border-dark"
                    src={icon.url}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              );
            })}
          </div>

          
        </div>
      </div>
    );
  }
}
