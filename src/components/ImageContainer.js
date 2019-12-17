import React from "react";
import styled from "styled-components";

export default function ImageContainer({ photos }) {
  const imgStyle = {
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };
  return (
    <Container>
      {photos &&
        photos.map((photo, index) => {
          if (index >= 9) return null;
          return (
            <Image key={index} index={index + 1}>
              <img
                src={photo.makerLogoUrl}
                alt={photo.makerName}
                style={imgStyle}></img>
            </Image>
          );
        })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
  grid-gap: 10px;
  /* background-color: black; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 10px;
  padding: 10px;
`;

const Image = styled.div`
  /* display: flex; */
  display: inline-block;
  justify-content: center;
  align-items: center;
  /* background-color: #3d3b41; */
  border-radius: 20px;
  font-size: 28px;
  color: white;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
`;
