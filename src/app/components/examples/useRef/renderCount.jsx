import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [testState, setTestState] = useState(false);
    const toggleTest = () => {
        setTestState(!testState);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>render count:{renderCount.current}</p>
            <button className={"btn btn-primary"} onClick={toggleTest}>test button</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
