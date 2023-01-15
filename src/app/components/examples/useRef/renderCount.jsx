import React, { useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const [renderCount, setRenderCount] = useState();
    useEffect(() => {
        setRenderCount(prevState => prevState + 1);
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>renderCount:{renderCount}</p>
        </CardWrapper>
    );
};

export default RenderCountExample;
