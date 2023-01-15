import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);

    const fact = factorial(value);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider/>
                <p>
                    value: { value }
                </p>
                <p>
                    factorial : {fact}
                </p>
                <button className={"btn btn-primary m-2"} onClick={() => { setValue((prevState) => prevState + 1); }} >Decrement</button>
                <button className={"btn btn-primary m-2"} onClick={() => { setValue((prevState) => prevState - 1); }}>Increment</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
