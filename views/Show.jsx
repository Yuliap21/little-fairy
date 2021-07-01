const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <DefaultLayout title=
      {`${product.name.toUpperCase()} Show Page`}>
        { /* hello comment */}
        <h1> Show Page </h1>
        The {product.name} is {product.color}
        { product.smell?
          '  It smells like a cherry blossom':
          '  It has zero smell' }.
          {product.description}, {product.price}, {product.qty}
      </DefaultLayout>
    )
  }
}
module.exports = Show;
