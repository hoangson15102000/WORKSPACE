import React from "react";
const Clothes = (props) => {
    // console.log(props);
    return (
        <div>
            <h1>{props.children}</h1>
            <ul>
                <li>ten {props.name}</li>
                <li>ten {props.type}</li>
                <li>ten {props.color}</li>
                <li>ten {props.size}</li>

            </ul>
        </div>
    )
}
export default Clothes;