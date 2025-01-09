import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function Sticker (){
    return(
        <div id="navBar">
            <span>
                <img src="https://m.media-amazon.com/images/G/01/sell/icons/star.svg" alt="" />
                Get over $50K in potential incentives when you start selling with Amazon. <a href="https://sell.amazon.com/grow#nsi">Learn how</a>
            </span>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center",gap: "15px"}}>
                <span id="search">
                    <FontAwesomeIcon id="search_icon" icon={faMagnifyingGlass} />
                     search
                </span>
                <span>
                    <FontAwesomeIcon style={{fontSize: "0.8em", marginRight: "5px"}} icon={faEarthAfrica} /> 
                    English
                </span>
            </div>
        </div>
    )
}


export default Sticker