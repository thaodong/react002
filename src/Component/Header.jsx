import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
          <nav className="bg-dark p-3 fs-4" style={{opacity: '0.5'}}>
            <div className="container-fluid text-white text-center">
                TRY GLASSES APP ONLINE
            </div>
          </nav>
      </>
    );
  }
}
