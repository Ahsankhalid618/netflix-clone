import React from "react";
import Kid from "../kids.png";
export default function Kids() {
  return (
    <div
      style={{
        backgroundColor: "black",
        // width: "100vw",
        color: "white",
        height: "70vh",
        borderBottom: "8px solid #222"
      }}
    >
      <div className="outermost" style={{ display: "flex", width: "100%" }}>
        <div
          className="kids"
          style={{
            width: "65em",
            height: "65vh",
            display: "flex",
 
          }}
        >
          <img
            src={Kid}
            alt="kids.."
            style={{
              marginTop: "2rem",
              marginLeft: "12rem",
              height: "25em",
              zIndex: "1",
            }}
          />
        </div>
        <div
          className="text"
          style={{
            alignSelf: "center",
            flexWrap: "wrap",

            paddingRight: "12rem",

            width: "50vw",
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
            Create profiles for kids.
          </h1>
          <h2
            style={{
              fontFamily:
                "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
              fontWeight: "400",
              fontSize: " 1.625rem",
              lineHeight:"1.3"
            }}
          >
            Send kids on adventures with their favorite characters in a space
            made just for them—<br/>free with your membership.
          </h2>
        </div>
      </div>
    </div>
  );
}
