import React from "react";
import tv from "../tv.png";
import ntvideo from "../ntvideo.m4v";
export default function Tv() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "65vh",
        borderBottom: "8px solid #222",
        // width: "100vw",
      }}
    >
      <div className="outermost" style={{ display: "flex" }}>
        <div
          className="text"
          style={{
            alignSelf: "center",
            flexWrap: "wrap",
            paddingLeft: "11rem",
            paddingRight: "2rem",
            // marginRight:"10rem"
            // marginLeft:"10rem"
          }}
        >
          <h1
            style={{
              fontFamily:
                "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
              fontWeight: "700",
              fontSize: "3.125rem",
              lineHeight: "1.1",
              marginBottom: "0.5rem",
            }}
          >
            Enjoy on your TV.
          </h1>
          <h2
            style={{
              fontFamily:
                "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
              fontWeight: "400",
              fontSize: " 1.625rem",
            }}
          >
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div
          className="tv"
          style={{
            //  backgroundColor: "green",
            width: "94vw",
            height: "65vh",
            display: "flex",
          }}
        >
          <img
            src={tv}
            alt="tv.."
            style={{
              width: "31vw",
              marginTop: "3rem",
              height: "50vh",
              zIndex: "1",
            }}
          />
          <video
            autoPlay
            src={ntvideo}
            playsinline
            muted
            loop
            typeof="video/mp4"
            style={{
              width: "40rem",
              height: "12.2rem",
              position: "absolute",
              marginTop: "7.6rem",
              marginLeft: "-5.3rem",
            }}
          ></video>
        </div>
      </div>
    </div>
  );
}
