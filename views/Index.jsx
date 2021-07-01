const React = require('react');
const DefaultLayout = require('./layouts/Default');

const h1Style = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render(){
    const products = this.props.products;
    return (
      <DefaultLayout title={"Products Index Page"}>
        <h1 style={h1Style}>Products Index Page</h1>
        <nav>
        <a href="/products/new">Create a New Product</a>
        </nav>
        <ul>
          {
          products.map((product) => {
              return (
              <li key= {fruit._id}>
              The <a href= {`/products/${product._id}`}>{product.name}</a>
              {' '}is {product.color} <br/>
                  {product.smell?
                     `It smells like a cherry blossom`:
                     `It has zero smell`
                  } <br/>
                  {product.description}, {product.img}, {product.price}, {product.qty}

                  <form method="POST" action={`/products/${product._id}?_method=DELETE`}>
                          <input type="submit" value="DELETE"/>
                  </form>
                  <a href={`/products/${product._id}/edit`}>Edit This Product</a>

              </li>
              )
            })
          }
        </ul>
      </DefaultLayout>
    )
  }
}
module.exports = Index;
