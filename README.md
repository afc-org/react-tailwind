# Tailwindjs/react-tailwindjs

![version](https://img.shields.io/badge/version-0.1.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) <a href="https://github.com/tailwindjs/react-tailwindjs/issues?q=is%3Aopen+is%3Aissue" target="_blank">![GitHub issues open](https://img.shields.io/github/issues/tailwindjs/react-tailwindjs.svg)</a> <a href="https://github.com/tailwindjs/react-tailwindjs?q=is%3Aissue+is%3Aclosed" target="_blank">![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/tailwindjs/react-tailwindjs.svg)</a>

![tailwindjs/react-tailwindjs]({{--logo-image-here--}})

### A dynamic plugin extension for TailwindCSS.

Tailwindjs/react-tailwindjs is Free and Open Source. It does not change or add any CSS to the already one from TailwindCSS, It comes with code written with React as an extension to TailwindCSS for you to have dynamic components inside your app as well.

**Components**

It comes with 8 dynamic components, that any website needs.
We plan on implementing more, in the weeks to come.


## Table of Contents

* [Versions](#versions)
* [Components](#components)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [Dependencies](#dependencies)
* [Browser Support](#browser-support)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Resources](#resources)

## Versions

|Angular|JavaScript|React|VueJS|Svelte|
| --- | --- | --- | --- | --- |
| <a href="https://github.com/tailwindjs/angular-tailwindjs" target="_blank">Check Angular</a>  | <a href="https://github.com/tailwindjs/tailwindjs" target="_blank">Check JavaScript</a>  | <a href="https://github.com/tailwindjs/react-tailwindjs" target="_blank">Check React</a>  | <a href="https://github.com/tailwindjs/vue-tailwindjs" target="_blank">Check VueJS</a>  | <a href="https://github.com/tailwindjs/svelte-tailwindjs" target="_blank">Check Svelte</a>  |

## Components

- [Alert](#alert)
- [Button](#button)
- [Dropdown](#dropdown)
- Responsive Menu
- [Modal](modal)
- Responsive Navbar
- [Popover](#popover)
- [Tooltip](#tooltip)
- Tab Pills

## Quick start

```
npm i -E @tailwindjs/react-tailwindjs
```

## Documentation - React

After you have installed `@tailwindjs/react-tailwindjs` into your project, you can import and use our components like so:

### Alert

Usage:

```
// with closing button

import React from "react";
import { Alert } from "@tailwindjs/react-tailwindjs";
// or direct import
// import Alert from "@tailwindjs/react-tailwindjs/Alert";

// With Function Components (hooks)
export default function YourFunctionName() {
  return (
    <>
      <Alert>Alert text</Alert>
    </>
  );
}

// With Class Components
// export default class YourClassName extends React.Component{
//  render() {
//    return (
//      <>
//        <Alert>Alert text</Alert>
//      </>
//    );
//  }
//}
```

```
// without closing button
// this means, that you can controll whether the Alert is shown or not

import React from "react";
import { Alert } from "@tailwindjs/react-tailwindjs";
// or direct import
// import Alert from "@tailwindjs/react-tailwindjs/src/Alert";

// With Function Components (hooks)
export default function YourFunctionName() {
  return (
    <>
      <Alert controlled>Alert text</Alert>
    </>
  );
}

// With Class Components
// export default class YourClassName extends React.Component{
//  render() {
//    return (
//      <>
//        <Alert controlled>Alert text</Alert>
//      </>
//    );
//  }
//}
```

Props:

```
Alert.defaultProps = {
  controlled: false,
  color: "pink",
  icon: ""
};

Alert.propTypes = {
  // if set to false, then a closing button will be rendered so that the alert can be closed
  // if set to true, then the closing button will not be rendered
  controlled: PropTypes.bool,
  // set the background, border and text color for the alert
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
  // adds a font icon to the left of the message
  // for example, if you have included into your project font-awesome free
  // you could send "fa fa-heart"
  icon: PropTypes.string,
  children: PropTypes.node.isRequired
};
```

### Button

Usage:

```
import React from "react";
import { Button } from "@tailwindjs/react-tailwindjs";

// With Function Components (hooks)
export default function YourFunctionName() {
  return (
    <>
      <Button color="pink">Buton text</Button>
    </>
  );
}
```

Props:

```
Button.defaultProps = {
  color: "pink"
};

Button.propTypes = {
  // set the background, border and text color
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
}
```

### Dropdown

Usage:

```
// uncontrolled usage
import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "@tailwindjs/react-tailwindjs";

const YourComponent = () => {
  return (
      <Dropdown>
        <DropdownToggle color="dark">
          Dropdown
        </DropdownToggle>
        <DropdownMenu color="blue">
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Item 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
}

export default YourComponent;

// controlled usage
import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "@tailwindjs/react-tailwindjs";

const YourComponent = () => {
  const [show,setShow] = React.useState(false);
  return (
      <Dropdown controlled>
        <DropdownToggle color="black" onClick={() => setShow(!show)}>
          Dropdown
        </DropdownToggle>
        <DropdownMenu color="blue" show={show}>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Item 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
}

export default YourComponent;
```

Props:

```
Dropdown.defaultProps = {
  placement: "bottom"
};

Dropdown.propTypes = {
  // where the Dropdown should be rendered
  // NOTE: if there is no place for the dropdown to be rendered
  //    on the choosen placement, PopperJS will rendered it
  //    where it has place
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  // when using the uncontrolled version
  // you need to send exactly two children
  // - DropdownToggle
  // and
  // - DropdownMenu
  // if you fail to do so, an error will be thrown
  children: PropTypes.node.isRequired
};

DropdownToggle.defaultProps = {
  color: "pink"
};

DropdownToggle.propTypes = {
  // set the background
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
  ])
};

DropdownMenu.defaultProps = {
  show: false,
  placement: "top",
  color: "white"
};

DropdownMenu.propTypes = {
  // make the menu hidden or visible
  show: PropTypes.bool,
  // where the DropdownMenu should be rendered
  // NOTE: if there is no place for the dropdown menu to be rendered
  //    on the choosen placement, PopperJS will rendered it
  //    where it has place
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  // set the background
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
  ])
};

DropdownItem.defaultProps = {
  divider: false,
  disabled: false,
  light: true,
  dark: false,
  children: null
};

DropdownItem.propTypes = {
  // this will make the component to be rendered as a divider line
  divider: PropTypes.bool,
  // this will make the component to not be clickable
  disabled: PropTypes.bool,
  children: PropTypes.node
};
```

### Menu

### Modal

Usage:

```
import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHead,
  ModalTitle
} from "./src";

const YourComponent = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      {/* Uncontrolled version */}
      <Button color="pink" onClick={() => setShow(!show)}>
        Open Modal
      </Button>
      <Modal show={show}>
        <ModalDialog>
          <ModalContent>
            <ModalHead>
              <ModalTitle>This is the modal title, yo</ModalTitle>
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="float-right text-2xl font-bold text-black leading-none bg-transparent border-0 opacity-50 p-4 -mr-4 -mt-4 -mb-4 ml-auto cursor-pointer"
              >
                <span aria-hidden="true">×</span>
              </button>
            </ModalHead>
            <ModalBody>
              <p className="mb-100">
                A long time ago in a galaxy far, far away....
              </p>
              <p className="mb-100">
                The Normy Modal was just a normal-sized modal, working for the
                better of the empire, day by day, being a loyal soldier, not
                asking any questions, doing his part for empowering the empire.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="pink" onClick={() => setShow(!show)}>
                Save changes
              </Button>
              <Button color="gray" onClick={() => setShow(!show)}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default YourComponent;
```

Props:

```
Modal.defaultProps = {
  show: false
};

Modal.propTypes = {
  // send true to it to open the modal
  show: PropTypes.bool,
  children: PropTypes.node
};


ModalBody.defaultProps = {};

ModalBody.propTypes = {
  children: PropTypes.node
};


ModalContent.defaultProps = {};

ModalContent.propTypes = {
  children: PropTypes.node
};


ModalDialog.defaultProps = {
  size: "default"
};

ModalDialog.propTypes = {
  // size of the modal
  size: PropTypes.oneOf(["sm", "lg", "xl", "default"]),
  children: PropTypes.node
};


ModalFooter.defaultProps = {};

ModalFooter.propTypes = {
  children: PropTypes.node
};


ModalHead.defaultProps = {};

ModalHead.propTypes = {
  children: PropTypes.node
};


ModalTitle.defaultProps = {};

ModalTitle.propTypes = {
  children: PropTypes.node
};
```

### Navbar

### Popover

Usage:

```
// controlled usage
import React from "react";
import { Button, Popover, PopoverHead, PopoverBody } from "@tailwindjs/react-tailwindjs";

const YourComponent = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      {/* Uncontrolled version */}
      <Button color="pink" id="popover-123456">
        Uncontrolled Popover
      </Button>
      <Popover target="#popover-123456">
        <PopoverHead>Uncontrolled Popover</PopoverHead>
        <PopoverBody>
          This is the Body of the Uncontrolled Popover, and the above is the
          Title, man!
        </PopoverBody>
      </Popover>
      <br />
      <br />
      {/* Controlled version */}
      <Button color="pink" id="popover-654321" onClick={() => setShow(!show)}>
        Controlled Popover
      </Button>
      <Popover
        controlled
        show={show}
        placement="bottom"
        target="#popover-654321"
      >
        <PopoverHead>Controlled Popover</PopoverHead>
        <PopoverBody>
          This is the Body of the Controlled Popover, and the above is the
          Title, man!
        </PopoverBody>
      </Popover>
    </>
  );
};

export default YourComponent;
```

Props:

```
Popover.defaultProps = {
  placement: "top",
  controlled: false,
  show: false
};

Popover.propTypes = {
  // target is the ID of the element we want the popover to be associated to
  target: PropTypes.string,
  // where the Popover should be rendered
  // NOTE: if there is no place for the popover to be rendered
  //    on the choosen placement, PopperJS will rendered it
  //    where it has place
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  // if you want to controll the popover yourself
  // and decide when to show it, and when to close it
  // but you will still need to pass the target element
  show: PropTypes.bool,
  controlled: PropTypes.bool,
  children: PropTypes.node
};


PopoverHead.defaultProps = {};

PopoverHead.propTypes = {
  children: PropTypes.node
};

PopoverBody.defaultProps = {};

PopoverBody.propTypes = {
  children: PropTypes.node
};
```

### Tooltip

Usage:

```
// controlled usage
import React from "react";
import { Button, Tooltip } from "@tailwindjs/react-tailwindjs";

const YourComponent = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      {/* Uncontrolled version */}
      <Button color="pink" id="tooltip-123456">
        Uncontrolled Tooltip
      </Button>
      <Tooltip target="#tooltip-123456">Uncontrolled Tooltip</Tooltip>
      <br />
      <br />
      {/* Controlled version */}
      <Button
        color="pink"
        id="tooltip-654321"
        onMouseEnter={() => setShow(!show)}
        onMouseLeave={() => setShow(!show)}
      >
        Controlled Tooltip
      </Button>
      <Tooltip
        controlled
        show={show}
        placement="bottom"
        target="#tooltip-654321"
      >
        Controlled Tooltip
      </Tooltip>
    </>
  );
};

export default YourComponent;

```

Props:

```
Tooltip.defaultProps = {
  placement: "top",
  controlled: false,
  show: false
};

Tooltip.propTypes = {
  // target is the ID of the element we want the tooltip to be associated to
  target: PropTypes.string,
  // where the Tooltip should be rendered
  // NOTE: if there is no place for the tooltip to be rendered
  //    on the choosen placement, PopperJS will rendered it
  //    where it has place
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  // if you want to controll the tooltip yourself
  // and decide when to show it, and when to close it
  // but you will still need to pass the target element
  show: PropTypes.bool,
  controlled: PropTypes.bool,
  children: PropTypes.node
};
```


### Styles

Do not forget that you will need to either get a compiled version of TailwindCSS, or to compile your own version, but one that will have the following classes from TailwindCSS:
```
px-5 py-3 border border-solid rounded relative mb-4 absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 outline-none focus:outline-none opacity-50 hover:opacity-75 hover:text-black text-xl inline-block mr-5 align-middle mr-8 bg-indigo-200 text-indigo-800 border-indigo-300 bg-gray-300 text-gray-800 border-gray-400 bg-green-200 text-green-800 border-green-300 bg-red-200 text-red-800 border-red-300 bg-orange-200 text-orange-800 border-orange-300 bg-blue-200 text-blue-800 border-blue-300 bg-white text-gray-600 border-gray-100 bg-gray-400 border-gray-500 left-0 z-50 hidden py-2 text-base text-left list-none mt-1 mb-1 mr-1 ml-1 block w-full py-1 px-6 clear-both font-normal whitespace-no-wrap border-0 hover:text-gray-900 hover:bg-gray-100 active:text-white active:bg-blue-500 text-white bg-blue-500 text-gray-400 pointer-events-none mb-2 flex flex-wrap items-center bg-gray-600 justify-between px-4 bg-blue-600 container mx-auto lg:px-4 px-0 capitalize mr-4 leading-relaxed ml-auto cursor-pointer px-3 text-gray-300 lg:hidden lg:flex lg:w-auto flex-grow lg:items-center lg:ml-auto pl-0 mb-0 flex-col lg:flex-row px-2 no-underline mb-3 leading-normal text-sm break-words text-center bg-black mr-2 ml-2 bg-green-600 bg-red-600 bg-yellow-500 bg-teal-500 bg-gray-100 text-gray-900 text-black bg-gray-800 -mb-px flex-auto text-blue-600 hover:text-blue-700 cursor-default rounded-t border-transparent border-b-0 border-b border-gray-200 sm:flex-row md:flex-row xl:flex-row navbar-expand sm:hidden md:hidden xl:hidden p-4 pointer-events-auto border-gray-600 transition-transform duration-300 ease-out w-auto m-2 sm:my-8 sm:mx-auto transform -translate-y-1 sm:max-w-xs md:max-w-screen-md lg:max-w-screen-lg sm:max-w-screen-sm justify-end p-3 border-t border-gray-300 rounded-b items-start opacity-0 fixed h-full overflow-hidden transition-opacity duration-75 ease-linear font-medium leading-tight mb-3mr-3 ml-3 mt-3
```
If you use `purge`, `postcss-purgecss`, `postcss` or any other tool to delete unused `css`, you can add the following array into your ignore (i.e. keep classes / whitelist etc.):
```
["px-5","py-3","border","border-solid","rounded","relative","mb-4","absolute","bg-transparent","text-2xl","font-semibold","leading-none","right-0","top-0","outline-none","focus:outline-none","opacity-50","hover:opacity-75","hover:text-black","text-xl","inline-block","mr-5","align-middle","mr-8","bg-indigo-200","text-indigo-800","border-indigo-300","bg-gray-300","text-gray-800","border-gray-400","bg-green-200","text-green-800","border-green-300","bg-red-200","text-red-800","border-red-300","bg-orange-200","text-orange-800","border-orange-300","bg-blue-200","text-blue-800","border-blue-300","bg-white","text-gray-600","border-gray-100","bg-gray-400","border-gray-500","left-0","z-50","hidden","py-2","text-base","text-left","list-none","mt-1","mb-1","mr-1","ml-1","block","w-full","py-1","px-6","clear-both","font-normal","whitespace-no-wrap","border-0","hover:text-gray-900","hover:bg-gray-100","active:text-white","active:bg-blue-500","text-white","bg-blue-500","text-gray-400","pointer-events-none","mb-2","flex","flex-wrap","items-center","bg-gray-600","justify-between","px-4","bg-blue-600","container","mx-auto","lg:px-4","px-0","capitalize","mr-4","leading-relaxed","ml-auto","cursor-pointer","px-3","text-gray-300","lg:hidden","lg:flex","lg:w-auto","flex-grow","lg:items-center","lg:ml-auto","pl-0","mb-0","flex-col","lg:flex-row","px-2","no-underline","mb-3","leading-normal","text-sm","break-words","text-center","bg-black","mr-2","ml-2","bg-green-600","bg-red-600","bg-yellow-500","bg-teal-500","bg-gray-100","text-gray-900","text-black","bg-gray-800","-mb-px","flex-auto","text-blue-600","hover:text-blue-700","cursor-default","rounded-t","border-transparent","border-b-0","border-b","border-gray-200","sm:flex-row","md:flex-row","xl:flex-row","navbar-expand","sm:hidden","md:hidden","xl:hidden","p-4","pointer-events-auto","border-gray-600","transition-transform","duration-300","ease-out","w-auto","m-2","sm:my-8","sm:mx-auto","transform","-translate-y-1","sm:max-w-xs","md:max-w-screen-md","lg:max-w-screen-lg","sm:max-w-screen-sm","justify-end","p-3","border-t","border-gray-300","rounded-b","items-start","opacity-0","fixed","h-full","overflow-hidden","transition-opacity","duration-75","ease-linear","font-medium","leading-tight","mb-3mr-3","ml-3","mt-3"]
```
Then, you can import your styles inside your `index.js` file (mounting js file for your app) like so:
```
import "path/to/your/tailwindcss/compiled/styles.css";
```
**NOTE**: alternatively, you can leave the components without any TailwindCSS styling code and render only HTML.

## Dependencies

**@tailwindjs/react-tailwindjs** to properly work needs the following dependencies:
- **@popperjs/core**@2.2.1
- **react**@16.13.1
- **react-dom**@16.13.1
```
npm i -E @popperjs/core@2.2.1 react@16.13.1 react-dom@16.13.1
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

| Chrome | Firefox | Edge | Safari | Opera |
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://github.com/tailwindjs/react-tailwindjs/blob/master/assets/logos/chrome-logo.png?raw=true" width="64" height="64"> | <img src="https://github.com/tailwindjs/react-tailwindjs/blob/master/assets/logos/firefox-logo.png?raw=true" width="64" height="64"> | <img src="https://github.com/tailwindjs/react-tailwindjs/blob/master/assets/logos/edge-logo.png?raw=true" width="64" height="64"> | <img src="https://github.com/tailwindjs/react-tailwindjs/blob/master/assets/logos/safari-logo.png?raw=true" width="64" height="64"> | <img src="https://github.com/tailwindjs/react-tailwindjs/blob/master/assets/logos/opera-logo.png?raw=true" width="64" height="64"> |

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Angular Landing Page. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the @tailwindjs/react-tailwindjs.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Contributors
This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/tailwindjs/react-tailwindjs/contributors"><img src="https://opencollective.com/tailwindjs/contributors.svg?width=890&button=false" /></a>

## Licensing

- Copyright 2020 Tailwindjs/react-tailwindjs

- Licensed under <a href="https://github.com/tailwindjs/react-tailwind/blob/master/LICENSE.md" target="_blank">MIT</a>

## Resources
- Tailwindjs projects: <a href="https://github.com/tailwindjs/" target="_blank">https://github.com/tailwindjs/</a>
- JavaScript & TailwindCSS: <a href="https://github.com/tailwindjs/tailwindjs" target="_blank">https://github.com/tailwindjs/tailwindjs</a>
- Angular & TailwindCSS: <a href="https://github.com/tailwindjs/angular-tailwindjs" target="_blank">https://github.com/tailwindjs/angular-tailwindjs</a>
- React & TailwindCSS: <a href="https://github.com/tailwindjs/angular-tailwindjs" target="_blank">https://github.com/tailwindjs/react-tailwindjs</a>
- Svelte & TailwindCSS: <a href="https://github.com/tailwindjs/angular-tailwindjs" target="_blank">https://github.com/tailwindjs/svelte-tailwindjs</a>
- VueJS & TailwindCSS:  <a href="https://github.com/tailwindjs/angular-tailwindjs" target="_blank">https://github.com/tailwindjs/vue-tailwindjs</a>
- Issues: <a href="https://github.com/tailwindjs/react-tailwindjs/issues" target="_blank">Github Issues Page</a>
