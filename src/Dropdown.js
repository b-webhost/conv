import React from "react";
import "./Dropdown.css";

function Dropdown() {
    return (
        <div class="Dropdown">
            <button class="dropbtn">USD</button>
            <div class="dropdown-content">
                <a href="#">USD</a>
                <a href="#">RUB</a>
                <a href="#">UAH</a>
            </div>
        </div>
    );
}

export default Dropdown;
