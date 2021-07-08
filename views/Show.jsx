const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <DefaultLayout title=
      {`${product.name.toUpperCase()}`} styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/showpage.css'}]}>
        { /* hello comment */}
        <h1> Take a Close Look </h1>
        The {product.name} is {product.color}
        { product.smell?
          '  It smells like a cherry blossom':
          '  It has zero smell' }.
          {product.description},
          <img src={product.img}/>
          Price:${product.price},
          In Stock:{product.qty}
      </DefaultLayout>
    )
  }
}
module.exports = Show;
