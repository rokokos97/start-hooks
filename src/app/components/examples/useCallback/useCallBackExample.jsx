import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };
    const validateWithCallBack = useCallback(
        (data) => {
            console.log(data);
        },
        []
    );
    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
        }, [data]);
    useEffect(() => { withOutCallBack.current++; }, [validateWithOutCallBack]);
    useEffect(() => { withCallBack.current++; }, [validateWithCallBack]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallBack: {withOutCallBack.current} </p>
            <p>Render withCallBack: {withCallBack.current} </p>
            <label htmlFor="email" className="form-label">Email</label>
            <input
                type="email"
                id="email"
                className="form-control"
                onChange={handleChange}
                name={"email"}
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
