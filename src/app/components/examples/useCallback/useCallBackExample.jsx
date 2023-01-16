import React, { useState, useRef, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallBack = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };
    useEffect(() => { validateWithOutCallBack(data); }, [data]);
    useEffect(() => { withOutCallBack.current++; }, [validateWithOutCallBack]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallBack: {withOutCallBack.current} </p>
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
