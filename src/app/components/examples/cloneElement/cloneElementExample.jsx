import React from "react";
import CardWrapper from "../../common/Card";

import SmallTitle from "../../common/typografy/smallTitle";
import TextField from "../../common/form/textField";
import Divider from "../../common/divider";
const CloneElementExample = () => {
    const field = <TextField name={"email"} label={"Email"}/>;
    const handleChange = (target) => {
        console.log("change:", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            <Divider/>
            { field }
            {React.cloneElement(field, { onChange: handleChange, label: "Clone element" })}
        </CardWrapper>
    );
};

export default CloneElementExample;
