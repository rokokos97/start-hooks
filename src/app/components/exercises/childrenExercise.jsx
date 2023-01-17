import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};

const ComponentsList = ({ children }) => {
    const childrenArray = React.Children.toArray(children);
    console.log("childrenArray", childrenArray);
    return React.Children.map(childrenArray, (child) => {
        console.log("child.key", child.key);
        return React.cloneElement(child, { ...child.props, num: +child.key.replace(".", "") + 1 });
    });
};
ComponentsList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const Component = ({ num }) => {
    console.log("num", num);
    return <div>{num} Компонент списка</div>;
};
Component.propTypes = {
    num: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChildrenExercise;
