import React from "react";

import stmobile from "../stmobile.jpg";
import stposter from "../stposter.png";
import dicon from "../dicon.gif";
export default function mobile() {
  return (
    <div
      style={{
        backgroundColor: "black",
        // width: "100vw",
        color: "white",
        height: "65vh",
        borderBottom: "8px solid #222",
      }}
    >
      <div className="outermost" style={{ display: "flex", width: "100%" }}>
        <div
          className="mobile"
          style={{
            width: "65em",
            height: "65vh",
            display: "flex",
            position: "relative",
          }}
        >
          <img
            src={stmobile}
            alt="andriod.."
            style={{
              marginTop: "2rem",
              marginLeft: "5rem",
              height: "25em",

              zIndex: "1",
            }}
          />
          <div
            className="d-icon-withposter"
            style={{
              backgroundColor: "black",
              color: "white",
              height: "6.2rem",
              width: "21rem",
              zIndex: "1",
              position: "absolute",
              top: "19.5rem",
              right: "15.1rem",
              borderRadius: "0.75em",
              display: "flex",
              boxShadow: "0 0 2em 0 #000",
              alignItems: "center",
              border: "2px solid hsla(0,0%,100%,.25)",
              //   justifyContent:"space-around"
            }}
          >
            <img
              src={stposter}
              alt="poster"
              style={{
                height: "5rem",
                paddingRight: "1rem",
                paddingLeft: "10px",
              }}
            />
            <div className="mini-text">
              <h3
                style={{
                  lineHeight: "0",
                  fontWeight: "600",
                  fontSize: "1rem",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
                }}
              >
                Stranger Things{" "}
              </h3>
              <h4
                style={{
                  fontWeight: "400",
                  lineHeight: "0",
                  fontSize: "0.9rem",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
                  color: "#0071eb",
                }}
              >
                Downloading...
              </h4>
            </div>
            <img
              src={dicon}
              alt="loading_gif"
              style={{ width: "3.5rem", height: "3.75em", paddingLeft: "4rem" }}
            />
          </div>
        </div>
        <div
          className="text"
          style={{
            alignSelf: "center",
            flexWrap: "wrap",

            paddingRight: "13rem",

            width: "50%",
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
            Download your shows to watch offline.
          </h1>
          <h2
            style={{
              fontFamily:
                "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
              fontWeight: "400",
              fontSize: " 1.625rem",
            }}
          >
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
      </div>
    </div>
  );
}
