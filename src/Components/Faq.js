import React, { useState } from "react";
export default function Faq() {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  const [show, setShow] = useState();
  // var id;
  // const closepara = (id) => {
  //   if (show === id) {
  //     setShow(null);
  //   }
  // };
  // const openpara = (id) => {
  //   setShow(id);
  // };
  //
  const toggle = (id) => {
    if (show === id) {
      setShow(null);
    } else {
      setShow(id);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "auto",
        paddingTop: "3em",
        paddingBottom: "9.5em",
        borderBottom: "8px solid #222",
      }}
    >
      <div
        className="fheading"
        style={{
          textAlign: "center",
          fontSize: "1.5em",
          lineHeight: "1.1",
          marginBottom: "0.5rem",
          fontWeight: "400",
          fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
          paddingBottom: "0.1em",
        }}
      >
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faqList" style={{ paddingBottom: "1.5em" }}>
        <ul>
          <li style={{ listStyle: "none" }} /*key={id}*/>
            <button
              style={{
                width: "54.2%",
                padding: " 0.8em 2.2em 0.8em 1.2em",
                marginLeft: "12em",
                marginBottom: "0.25em",
                position: "relative",
                fontSize: "1.625rem",
                fontWeight: "400",
                backgroundColor: "#303030",
                color: "white",
                textAlign: "start",
                cursor: "pointer",
              }}
              // id={id}
              onClick={() => toggle(1)}
              // onClick={()=>toggleshow(id)}
              // show = false
              // openpara = setShow(true)
              //closepara = setShow(false)

              //   onClick={openpara}
              //   onDoubleClick={closepara}
            >
              What is Netflix?
              <span
                style={{
                  width: "1em",
                  color: "white",
                  position: "absolute",
                  fill: "white",
                  right: "1em",
                  top: "30%",
                  // transition:"all.2s"
                }}
              >
                {show === 1 ? "✕" : "➕"}
              </span>
            </button>

            {show === 1 && (
              <div
                className="faq-answer "
                style={{
                  width: "48%",
                  padding: " 0.8em 2.2em 0.8em 1.2em",
                  marginLeft: "12.05em",
                  marginBottom: "0.25em",
                  position: "relative",
                  fontSize: "1.625rem",
                  fontWeight: "400",
                  backgroundColor: "#303030",
                  color: "white",
                  textAlign: "start",
                }}
              >
                <span>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                  <br />
                  <br />
                  You can watch as much as you want, whenever you want without a
                  single commercial – all for one low monthly price. There's
                  always something new to discover and new TV shows and movies
                  are added every week!
                </span>
              </div>
            )}
          </li>
          <li style={{ listStyle: "none" }} /*key={id}*/>
            <button
              style={{
                width: "54.2%",
                padding: " 0.8em 2.2em 0.8em 1.2em",
                marginLeft: "12em",
                marginBottom: "0.25em",
                position: "relative",
                fontSize: "1.625rem",
                fontWeight: "400",
                backgroundColor: "#303030",
                color: "white",
                textAlign: "start",
                cursor: "pointer",
              }}
              // id={id}
              onClick={() => toggle(2)}
              // onClick={()=>toggleshow(id)}

              // show = false
              // openpara = setShow(true)
              //closepara = setShow(false)

              //   onClick={openpara}
              //   onDoubleClick={closepara}
            >
              How much does Netflix cost?
              <span
                style={{
                  width: "1em",
                  color: "white",
                  position: "absolute",
                  fill: "white",
                  right: "1em",
                  top: "30%",
                  // transition:"all.2s"
                }}
              >
                {show === 2 ? "✕" : "➕"}
              </span>
            </button>

            {show === 2 && (
              <div
                className="faq-answer "
                style={{
                  width: "48%",
                  padding: " 0.8em 2.2em 0.8em 1.2em",
                  marginLeft: "12.05em",
                  marginBottom: "0.25em",
                  position: "relative",
                  fontSize: "1.625rem",
                  fontWeight: "400",
                  backgroundColor: "#303030",
                  color: "white",
                  textAlign: "start",
                }}
              >
                <span>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from Rs250 to Rs1,100 a month. No extra costs, no contracts.
                </span>
              </div>
            )}
          </li>
          <li style={{ listStyle: "none" }}>
            <button
              style={{
                width: "54.2%",
                padding: " 0.8em 2.2em 0.8em 1.2em",
                marginLeft: "12em",
                marginBottom: "0.25em",
                position: "relative",
                fontSize: "1.625rem",
                fontWeight: "400",
                backgroundColor: "#303030",
                color: "white",
                textAlign: "start",
                cursor: "pointer",
              }}
              // id={3}
              onClick={() => toggle(3)}

              // show = false
              // openpara = setShow(true)
              //closepara = setShow(false)

              //   onClick={openpara}
              //   onDoubleClick={closepara}
            >
              Where can I watch?
              <span
                style={{
                  width: "1em",
                  color: "white",
                  position: "absolute",
                  fill: "white",
                  right: "1em",
                  top: "30%",
                  // transition:"all.2s"
                }}
              >
                {show === 3 ? "✕" : "➕"}
              </span>
            </button>

            {show === 3 && (
              <div
                className="faq-answer "
                style={{
                  width: "48%",
                  padding: " 0.8em 2.2em 0.8em 1.2em",
                  marginLeft: "12.05em",
                  marginBottom: "0.25em",
                  position: "relative",
                  fontSize: "1.625rem",
                  fontWeight: "400",
                  backgroundColor: "#303030",
                  color: "white",
                  textAlign: "start",
                }}
              >
                <span>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <br />
                  <br />
                  You can also download your favorite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </span>
              </div>
            )}
          </li>
          <li style={{ listStyle: "none" }}>
            <button
              style={{
                width: "54.2%",
                padding: " 0.8em 2.2em 0.8em 1.2em",
                marginLeft: "12em",
                marginBottom: "0.25em",
                position: "relative",
                fontSize: "1.625rem",
                fontWeight: "400",
                backgroundColor: "#303030",
                color: "white",
                textAlign: "start",
                cursor: "pointer",
              }}
              onClick={() => toggle(4)}

              // show = false
              // openpara = setShow(true)
              //closepara = setShow(false)

              //   onClick={openpara}
              //   onDoubleClick={closepara}
            >
              How do I cancel?
              <span
                style={{
                  width: "1em",
                  color: "white",
                  position: "absolute",
                  fill: "white",
                  right: "1em",
                  top: "30%",
                  // transition:"all.2s"
                }}
              >
                {show === 4 ? "✕" : "➕"}
              </span>
            </button>

            {show === 4 && (
              <div
                className="faq-answer "
                style={{
                  width: "48%",
                  padding: " 0.8em 2.2em 0.8em 1.2em",
                  marginLeft: "12.05em",
                  marginBottom: "0.25em",
                  position: "relative",
                  fontSize: "1.625rem",
                  fontWeight: "400",
                  backgroundColor: "#303030",
                  color: "white",
                  textAlign: "start",
                }}
              >
                <span>
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </span>
              </div>
            )}
          </li>
          <li style={{ listStyle: "none" }}>
            <button
              style={{
                width: "54.2%",
                padding: " 0.8em 2.2em 0.8em 1.2em",
                marginLeft: "12em",
                marginBottom: "0.25em",
                position: "relative",
                fontSize: "1.625rem",
                fontWeight: "400",
                backgroundColor: "#303030",
                color: "white",
                textAlign: "start",
                cursor: "pointer",
              }}
              onClick={() => toggle(5)}

              // show = false
              // openpara = setShow(true)
              //closepara = setShow(false)

              //   onClick={openpara}
              //   onDoubleClick={closepara}
            >
              What can I watch on Netflix?
              <span
                style={{
                  width: "1em",
                  color: "white",
                  position: "absolute",
                  fill: "white",
                  right: "1em",
                  top: "30%",
                  // transition:"all.2s"
                }}
              >
                {show === 5 ? "✕" : "➕"}
              </span>
            </button>

            {show === 5 && (
              <div
                className="faq-answer "
                style={{
                  width: "48%",
                  padding: " 0.8em 2.2em 0.8em 1.2em",
                  marginLeft: "12.05em",
                  marginBottom: "0.25em",
                  position: "relative",
                  fontSize: "1.625rem",
                  fontWeight: "400",
                  backgroundColor: "#303030",
                  color: "white",
                  textAlign: "start",
                }}
              >
                <span>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </span>
              </div>
            )}
          </li>
          <li style={{ listStyle: "none" }}>
            <button
              style={{
                width: "54.2%",
                padding: " 0.8em 2.2em 0.8em 1.2em",
                marginLeft: "12em",
                marginBottom: "0.25em",
                position: "relative",
                fontSize: "1.625rem",
                fontWeight: "400",
                backgroundColor: "#303030",
                color: "white",
                textAlign: "start",
                cursor: "pointer",
              }}
              onClick={() => toggle(6)}

              // show = false
              // openpara = setShow(true)
              //closepara = setShow(false)

              //   onClick={openpara}
              //   onDoubleClick={closepara}
            >
              Is Netflix good for kids?
              <span
                style={{
                  width: "1em",
                  color: "white",
                  position: "absolute",
                  fill: "white",
                  right: "1em",
                  top: "30%",
                  // transition:"all.2s"
                }}
              >
                {show === 6 ? "✕" : "➕"}
              </span>
            </button>

            {show === 6 && (
              <div
                className="faq-answer "
                style={{
                  width: "48%",
                  padding: " 0.8em 2.2em 0.8em 1.2em",
                  marginLeft: "12.05em",
                  marginBottom: "0.25em",
                  position: "relative",
                  fontSize: "1.625rem",
                  fontWeight: "400",
                  backgroundColor: "#303030",
                  color: "white",
                  textAlign: "start",
                }}
              >
                <span>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space.
                  <br />
                  <br />
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </span>
              </div>
            )}
          </li>
        </ul>
      </div>
      <h3
        style={{
          color: "rgb(255,255,255)",
          textAlign: "center",
          justifyContent: "center",
          fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
          fontWeight: "400",
          fontSize: "1.2rem",
        }}
      >
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div
        class="input-group mb-3"
        style={{
          display: "flex",
          gap: "1px",
          width: "48em",
          position: "absolute",
          left: "24.5%",
        }}
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
  );
}
