import React, { Component } from "react";
import { loadImage } from "../utils";

class Image extends Component {
  render() {
    loadImage();
    return <div>Image</div>;
  }
}

export default Image;
