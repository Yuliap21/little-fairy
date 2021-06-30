const React = require('react');
class Show extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <div>
        { /* hello comment */}
        <h1> Show Page </h1>
        The {product.name} is {product.color}
        { product.smell?
          '  It smells like a cherry blossom':
          '  It has zero smell' }
      </div>
    )
  }
}
module.exports = Show;
