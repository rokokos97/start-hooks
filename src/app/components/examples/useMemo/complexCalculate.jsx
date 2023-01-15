import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};
const runFactorial = (n) => {
    console.log("run factorial");
    return factorial(n);
};
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [color, setColor] = useState("primary");
    const fact = useMemo(() => runFactorial(value), [value]);
    useEffect(() => {
        console.log("render");
    });
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
                <button
                    className={`btn btn-${color}`}
                    onClick={() => { setColor((prevState) => prevState === "primary" ? "secondary" : "primary"); }}
                >change color button</button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
