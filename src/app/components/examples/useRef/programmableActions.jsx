import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handelClick = (e) => {
        e.preventDefault();
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handelClickColor = () => {
        console.log(inputRef.current);
        inputRef.current.style.background = inputRef.current.style.background ? "" : "red";
        console.log(inputRef.current.style);
    };
    const handelClickWidth = () => {
        console.log(inputRef.current);
        inputRef.current.style.width = "50%";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Programmable actions and properties
            </SmallTitle>
            <Divider/>
                <label htmlFor="email" className="form-label">Email</label>
                <input ref={inputRef} type="text" id="email" className="form-control"/>
                <button className={"btn btn-outline-secondary m-1"} onClick={handelClick}>Focus</button>
                <button className={"btn btn-outline-primary m-1"} onClick={handelClickColor}>Change color</button>
                <button className={"btn btn-outline-primary m-1"} onClick={handelClickWidth}>Change width</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
