import React from "react";

export default function small() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        borderBottom: "8px solid #222",
        height: "30vh",
        position: "relative",
      }}
    >
      <div
        className="text"
        style={{
          top: "3rem",
          left: " 10.2rem",
          position: "absolute",
          // marginLeft: " 0em",
          width: "31rem",
        }}
      >
        <h3
          style={{
            fontFamily:
              "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
            fontWeight: "700",
            fontSize: "3.125rem",
            lineHeight: "1.1",
            marginBottom: "0.5rem",
            margin: "auto",
          }}
        >
          Watch everywhere.
        </h3>
        <h4
          style={{
            fontFamily:
              "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
            fontWeight: "400",
            fontSize: " 1.625rem",
            marginTop: "16px",
          }}
        >
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </h4>
      </div>
    </div>
  );
}
