let React;

let ReactTestRenderer;
let MyComponent;

describe("MyComponent", () => {
  beforeEach(() => {
    jest.resetModules();

    MyComponent = require("./index.js");
    React = require("react");
    ReactTestRenderer = require("react-test-renderer");
  });
  it("should render without errors", () => {
    ReactTestRenderer.create(React.createElement(MyComponent, {})).toJSON();
  });
  it("should render without errors when imported after resetModules called", () => {
    const MyComponent = require("./index.js");
    ReactTestRenderer.create(React.createElement(MyComponent, {})).toJSON();
  });
});
