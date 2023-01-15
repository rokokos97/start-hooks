import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const handleChangeState = () => {
      setOtherState((prevState) => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>prev state: {prevState.current}</p>
            <p>other state: {otherState}</p>
            <button className={"btn btn-primary"} onClick={handleChangeState}>prev state</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
