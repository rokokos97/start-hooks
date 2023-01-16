import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
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
