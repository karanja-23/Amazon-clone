import logo from "../Assets/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import image from "../Assets/landing.jpg"
import incentiveImage from "../Assets/incentives.jpg"
function Body() {
  return (
    <div id="body">
      <div id="navigation">
        <div id="menu">
          <img src={logo} alt="logo" />
          <span>
            Start <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <span>
            Grow <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <span>
            Services <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <span>
            Resources <FontAwesomeIcon icon={faChevronDown} />
          </span>
          <span>
            Pricing <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </div>
        <div id="signup">
          <div className="signup-btns" id="login">
            <span>
              <FontAwesomeIcon
                style={{ marginRight: "3px", fontSize: "0.8em" }}
                icon={faLock}
              />{" "}
              Login
            </span>
          </div>
          <div className="signup-btns" id="signin">
            <span>Sign up</span>
          </div>
        </div>
      </div>
      <div id="landing">
        <div id="landing-content">
            <div id="content-div">
                <div id="content-title">
                 <span>Sell with the fastest-growing and preferred acquisition channel</span>
                </div>
                <div id="landingPage-btn">
                    <div id="signup-btn">
                        <span id="signin-span">Sign up</span>
                    </div>
                    <span style={{fontSize: "0.8em",width: "60%"}}>
                    Get 10% back on your first
                    $50,000 in branded sales
                    </span>
                </div>
            </div>

        </div>
        <div id="image-div">
            <img src={image} alt="landing page image" />
        </div>
      </div>
      <div id="barner">
        <span>
           More than 70% of Amazon sellers generate their first sale in less than 60 days.
        </span>
      </div>
      <div id="incentives">
        <div id="incentive-image">
            <img src={incentiveImage} alt="incentive image" />
        </div>
        <div id="incentive-content">
          <div id="incentive-title" >
            <img src="https://m.media-amazon.com/images/G/01/sell/icons/star.svg" alt="" />
            <span>New Seller Incentives</span>
          </div>
          <span>Get started with $50,000 in incentives</span>
        </div>
      </div>
    </div>
  );
}
export default Body;
