import "../../styles/circle/circle.scss";
import { useTeam } from "../../context/team-context";
const Circle = () => {
  const { callButton, contactButton } = useTeam();

  return (
    <div className="circle_parent">
      <div
        className="circle1"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(1.5)" : "scale(1)",
          opacity: callButton || contactButton ? "1" : "0.2",
        }}
      />
      <div
        className="circle2"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(2)" : "scale(1.5)",
          opacity: callButton || contactButton ? "0.6" : "0.2",
        }}
      />
      <div
        className="circle3"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(2.5)" : "scale(2)",
          opacity: callButton || contactButton ? "0.5" : "0.2",
        }}
      />
      <div
        className="circle4"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(3)" : "scale(2.5)",
          opacity: callButton || contactButton ? "0.4" : "0.3",
        }}
      />
      <div
        className="circle5"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(3.5)" : "scale(3)",
        }}
      />

      <div
        className="circle6"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(4)" : "scale(3.5)",
        }}
      />
      <div
        className="circle7"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(4.5)" : "scale(4)",
        }}
      />
      <div
        className="circle8"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(5)" : "scale(4.5)",
        }}
      />
      <div
        className="circle9"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(5.5)" : "scale(5)",
        }}
      />
      <div
        className="circle10"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(6)" : "scale(5.5)",
        }}
      />
      <div
        className="circle11"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(6.5)" : "scale(6)",
        }}
      />
      <div
        className="circle12"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(7)" : "scale(6.5)",
        }}
      />
      <div
        className="circle13"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(7.5)" : "scale(7)",
        }}
      />
      <div
        className="circle14"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(8)" : "scale(7.5)",
        }}
      />
      <div
        className="circle15"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(8.5)" : "scale(8)",
        }}
      />
      <div
        className="circle16"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(9)" : "scale(8.5)",
        }}
      />
      <div
        className="circle17"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(9.5)" : "scale(9)",
        }}
      />
      <div
        className="circle18"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(10)" : "scale(9.5)",
        }}
      />
      <div
        className="circle19"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(10.5)" : "scale(10)",
        }}
      />
      <div
        className="circle20"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(11)" : "scale(10.5)",
        }}
      />
      <div
        className="circle21"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(11.5)" : "scale(11)",
        }}
      />
      <div
        className="circle22"
        style={{
          transition: "0.5s ease-in-out",
          transform: callButton || contactButton ? "scale(12)" : "scale(11.5)",
        }}
      />
    </div>
  );
};

export default Circle;

{
  /* <div className="circle_parent">
<div id="below_six">
  <div id="below_five">
    <div id="below_four">
      <div id="below_three">
        <div id="below_two">
          <div id="below_one">
            <div id="one">
              <div id="two">
                <div id="three">
                  <div
                    id="four"
                    // style={{
                    //   transform:
                    //     callButton || contactButton
                    //       ? "scale(1.1)"
                    //       : "none",
                    //   opacity:
                    //     callButton || contactButton ? "0.5" : "0.4",
                    // }}
                  >
                    <div
                      id="five"
                      // style={{
                      //   transform:
                      //     callButton || contactButton
                      //       ? "scale(1.1)"
                      //       : "none",
                      //   opacity:
                      //     callButton || contactButton ? "1" : "0.4",
                      // }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
