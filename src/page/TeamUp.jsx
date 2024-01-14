// import { useState, useEffect } from "react";
import { useTeam } from "../context/team-context";
import "../styles/team-up/team-up.scss";
import frame from "../assets/pitch-catalyst-frame.png";
import Circle from "../components/circle/Circle";
const TeamUp = () => {
  const {
    callusMouseEnterHandler,
    callusMouseRemoveHandler,
    contactMouseEnterHandler,
    contactMouseRemoveHandler,
    callButton,
    contactButton,
    scrollY,
  } = useTeam();

  return (
    <div>
      {scrollY > 0 ? (
        <div
          className="circle_container_animated"
          style={{ transform: contactButton ? "translateX(213px)" : "none" }}
        >
          <Circle />
        </div>
      ) : null}

      <div className={scrollY > 0 ? "display_frame_animated" : "display_frame"}>
        <div
          className={
            scrollY > 0 ? "main-content-parent_animated" : "main-content-parent"
          }
        >
          <div className="btn_container">
            <div
              className={
                callButton
                  ? "first_btn_animated"
                  : contactButton
                  ? "first_btn_animated_for_second_btn"
                  : "first_btn"
              }
              style={{
                transform: callButton ? "scale(1.1)" : "none",
                filter: callButton ? "grayScale(100%)" : "none",
              }}
              onMouseEnter={callusMouseEnterHandler}
              onMouseLeave={callusMouseRemoveHandler}
            >
              <div
                style={{
                  filter: contactButton ? "grayScale(100%) blur(6px)" : "none",
                }}
              >
                Schedule Call
              </div>
              <div
                className="callus_btn"
                style={{
                  filter: contactButton ? "grayScale(100%) blur(4px)" : "none",
                }}
              >
                Call Us
              </div>
            </div>

            <div
              className={
                contactButton
                  ? "second_btn_animated"
                  : callButton
                  ? "second_btn_animated_for_first_btn"
                  : "second_btn"
              }
              style={{
                transform: contactButton ? "scale(1.1)" : "none",
                filter: contactButton ? "grayScale(100%)" : "none",
              }}
              onMouseEnter={contactMouseEnterHandler}
              onMouseLeave={contactMouseRemoveHandler}
            >
              <div
                style={{
                  filter: callButton ? "grayScale(100%) blur(6px)" : "none",
                }}
              >
                Contact Us
              </div>
              <div
                className="contact_btn"
                style={{
                  filter: callButton ? "grayScale(100%) blur(4px)" : "none",
                }}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* *******************************Button hover effect**************************************** */}
      <div>
        <img
          src={frame}
          alt="frame"
          className={
            scrollY > 0
              ? "image_frame_animated"
              : contactButton || callButton
              ? "image_frame_animated_for_btn"
              : "image_frame"
          }
          style={{
            transform:
              contactButton || callButton ? "translateY(-40px)" : "none",
            filter: contactButton || callButton ? "blur(4px)" : "none",
          }}
        />

        <div className="team_up_text_container">
          <div
            className={scrollY > 0 ? "team_up_frame_animated" : "team_up_frame"}
          >
            <span
              className={
                scrollY > 0
                  ? "let_animated"
                  : contactButton || callButton
                  ? "let_animated_for_btn"
                  : "none"
              }
              style={{
                transform:
                  contactButton || callButton ? "translateY(40px)" : "none",
                filter: contactButton || callButton ? "blur(4px)" : "none",
              }}
            >
              LET&#39;
            </span>
            <span
              className={
                scrollY > 0
                  ? "let_animated"
                  : contactButton || callButton
                  ? "let_animated_for_btn"
                  : "none"
              }
              style={{
                transform:
                  contactButton || callButton ? "translateY(40px)" : "none",
                filter: contactButton || callButton ? "blur(4px)" : "none",
              }}
            >
              S
            </span>
            <span
              className={
                scrollY > 0
                  ? "team_animated"
                  : contactButton || callButton
                  ? "team_animated_for_btn"
                  : "none"
              }
              style={{
                transform:
                  contactButton || callButton ? "translateY(40px)" : "none",
              }}
            >
              TEAM
            </span>
            <span className={scrollY > 0 ? "up_animated" : "none"}> UP</span>
          </div>
        </div>
      </div>

      {/* ********************************************************************************************** */}
    </div>
  );
};

export default TeamUp;
