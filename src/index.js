import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import TextArea from "./TextArea";
import Dropdown from "./Dropdown";

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <div className="wrapper">
            <div className="text-input-field">
                <TextArea />
                <TextArea />
            </div>
            <div className="dropdown-field">
                <Dropdown />
                <Dropdown />
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);
