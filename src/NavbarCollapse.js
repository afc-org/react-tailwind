import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const expanSchemes = {
  sm: "sm:flex sm:w-auto",
  md: "md:flex md:w-auto",
  lg: "lg:flex lg:w-auto",
  xl: "xl:flex xl:w-auto"
};

class NavbarCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show
    };
  }
  componentDidMount() {
    const { toggler, controlled } = this.props;
    let element = document.querySelector(toggler);
    if (!controlled) {
      element.addEventListener("click", this.toggleCollapse);
    }
  }
  toggleCollapse = () => {
    const { show } = this.state;
    this.setState({ show: !show });
    console.log(show);
  };
  render() {
    const { show: stateShow } = this.state;
    const {
      children,
      expand,
      show: propsShow,
      controlled,
      ...rest
    } = this.props;
    return (
      <>
        <div
          {...rest}
          className={classnames(
            { [expanSchemes[expand]]: expand },
            {
              hidden: (controlled && !propsShow) || (!controlled && !stateShow)
            },
            "flex-grow items-center w-full"
          )}
        >
          {children}
        </div>
      </>
    );
  }
}

NavbarCollapse.defaultProps = {
  show: false,
  controlled: false
};

NavbarCollapse.propTypes = {
  // if you want to controll yourself the opening and closing of the collapse
  show: PropTypes.bool,
  controlled: PropTypes.bool,
  // for controlled version,
  // you need to pass this so that the component can be opnened and closed
  // it has to come like "#toggler-id", where toggler-id can be any string
  toggler: PropTypes.string,
  // on which breakpoint should collapse be hidden
  expand: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  children: PropTypes.node
};

export default NavbarCollapse;
