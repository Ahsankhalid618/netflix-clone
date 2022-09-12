import React, { useState } from "react";
import MediaQuery from "react-responsive";
import Background from "../nt.jpg";
import logo from "../ntlogoR.svg";
export default function Home() {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url("${Background}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        // objectFit:"cover",
        backgroundRepeat: "no-repeat",
        // width: "100vw",
        height: "100vh",
        borderBottom: "8px solid #222"
      }}
    >
      <div
        className="gradient"
        style={{
          background: "rgba(0,0,0,.4)",
          backgroundImage:
            " linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8))",
          height: "100vh",
        }}
      >
        <img
          src={logo}
          alt="Load"
          style={{
            height: "45px",
            width: "167px",
            color: "#e50914",
            paddingTop: "1.9rem",
            paddingLeft: "2.5rem",
            fontFamily:
              "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
            fontWeight: "400",
            style: "normal",
          }}
        />
        <button
          type="button"
          className="btn btn-primary"
          style={{
            backgroundColor: "#e50914",
            color: "#ffff",
            fontSize: "1rem",
            borderRadius: "3px",
            border: "none",
            float: "right",
            fontWeight: "400",
            marginTop: "1.9rem",
            padding: "7px 17px",
            marginRight: "2.5rem",
            lineHeight: "normal",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
        <div
          className="text-center"
          style={{
            top: "28%",
            left: "25%",
            right: "25%",
            position: "absolute",
            flexWrap:"wrap"
            // overflowWrap: "break-word",
          }}
        >
          <MediaQuery maxWidth={1224}> </MediaQuery>
          <h1
            style={{
              color: "rgb(255,255,255)",

              fontSize: "4rem",
              fontFamily:
                "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
              lineHeight: "1.1",
              textAlign: "center",
              justifyContent: "center",
              fontWeight: "700",
              marginBottom:"0"
            }}
          >
            Unlimited movies, TV shows, and more.
          </h1>

          <h2
            style={{
              color: "#ffff",
              textAlign: "center",
              justifyContent: "center",
              lineHeight: "1.1",
              fontFamily:
                "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
              fontWeight: "400",
              fontSize: "1.625rem",
            }}
          >
            Watch anywhere. Cancel anytime.
          </h2>
          <h3
            style={{
              color: "rgb(255,255,255)",
              textAlign: "center",
              justifyContent: "center",
              fontFamily:
                "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
              fontWeight: "400",
              fontSize: "1.2rem",
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div
            class="input-group mb-3"
            style={{ display: "flex", gap: "1.1px" }}
          >
            <input
              type="email"
              class="form-control"
              placeholder="Email address"
              aria-label="Email address"
              aria-describedby="button-addon2"
              maxLength={50}
              minLength={5}
              tabIndex={0}
              style={{
                width: "65%",
                height: "4.4rem",
                outline: "none",
                border: "none",
                color: "black",
                fontSize: "16px",
                paddingInline: "10px",
                // left: "10px",
                // position: "absolute",
                // top: "50%",
                // transform: "translateY(-50%)",
                // transition: "font .1s ease,top .1s ease,transform .1s ease",
              }}
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                width: "33.5%",
                height: "4.53rem",
                color: hover ? "white" : "#ffff",
                backgroundColor: hover ? "red" : "#e50914",
                outline: "none",
                border: "none",
                fontSize: "1.875rem",
                cursor: "pointer",
                fontFamily:
                  "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
              }}
            >
              Get Started <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
