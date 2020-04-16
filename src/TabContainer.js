import React from "react";
import PropTypes from "prop-types";

const TabContainer = ({ children, color, controlled, ...rest }) => {
  const [newChildren, setNewChildren] = React.useState(() => {
    let newChildren = [];
    children.forEach((child, index) => {
      let grandChild = child.props.children;
      let targetTabContent = grandChild.props.target;
      let props = {
        ...grandChild.props,
        color: color
      };
      if (!controlled) {
        props.onClick = () => toggleTabs(targetTabContent);
      }
      newChildren.push(
        React.cloneElement(child, {
          children: React.cloneElement(grandChild, props),
          key: index
        })
      );
    });
    return newChildren;
  });
  if (controlled) {
    return (
      <>
        <ul
          {...rest}
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
        >
          {children}
        </ul>
      </>
    );
  }
  const toggleTabs = tabContentId => {
    let tabContent = document.querySelector(tabContentId);
    let newChildren = [];
    children.forEach((child, index) => {
      let grandChild = child.props.children;
      let targetTabContent = grandChild.props.target;
      document.querySelector(targetTabContent).classList.add("hidden");
      document.querySelector(targetTabContent).classList.remove("block");
      newChildren.push(
        React.cloneElement(child, {
          children: React.cloneElement(grandChild, {
            color: color,
            active: tabContentId === targetTabContent,
            onClick: () => toggleTabs(targetTabContent)
          }),
          key: index
        })
      );
    });
    setNewChildren(newChildren);
    tabContent.classList.add("block");
    tabContent.classList.remove("hidden");
  };
  return (
    <>
      <ul
        {...rest}
        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
      >
        {newChildren}
      </ul>
    </>
  );
};

TabContainer.defaultProps = {
  color: "pink",
  controlled: false
};

TabContainer.propTypes = {
  // if you want to controll the behavior yourself
  controlled: PropTypes.bool,
  // set the background, border and text color for the tab-link
  color: PropTypes.oneOf([
    "black",
    "white",
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink"
  ]),
  children: PropTypes.node
};

export default TabContainer;
