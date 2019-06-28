const reactTestRenderer = require('react-test-renderer')
const MyComponent = require('./index.js')
const React = require('react')

describe('MyComponent', () => {
  it('should render without errors', () => {
    reactTestRenderer.create(React.createElement(MyComponent, {})).toJSON()
  })
  it('should render without errors when imported after resetModules called', () => {
    jest.resetModules()
    const MyComponent = require('./index.js')
    reactTestRenderer.create(React.createElement(MyComponent, {})).toJSON()
  })
})
