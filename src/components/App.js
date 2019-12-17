import React, { Component } from "react";
import Pagination from "rc-pagination";
import ImageContainer from "./ImageContainer";
import "rc-pagination/assets/index.css";

const API_URL = `https://kpmdj7u7dd.execute-api.ap-northeast-2.amazonaws.com/recurit/makerList`;

class App extends Component {
  state = {
    photos: [],
    current: 1
  };

  loadImage = (page = 1) => {
    fetch(`${API_URL}?page=${page}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          photos: json
        });
      })
      .catch(error =>
        console.log("a error occurred while loading image...", error)
      );
  };

  onChange = (page = 1) => {
    this.setState({
      current: page
    });
    this.loadImage(page);
  };

  render() {
    const { photos, current } = this.state;
    const { loadImage } = this;
    if (photos.length === 0) {
      loadImage(current);
    }

    return (
      <div>
        <ImageContainer photos={photos} />
        <Pagination
          onChange={this.onChange}
          current={this.state.current}
          defaultPageSize={9}
          total={12 * 9}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "50px"
          }}
        />
      </div>
    );
  }
}

export default App;
