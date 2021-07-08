const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component {
  render(){
    const products = this.props.products;
    return (
    <DefaultLayout title={"Little Fairy"} styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/indexpage.css'}]}>
        <nav>
        <a href="/products/new">Create a New Product</a>
        </nav>
        <ul>
          {
          products.map((product) => {
              return (
              <li key= {product._id}>
              The <a href= {`/products/${product._id}`}>{product.name}</a>
              {' '}is {product.color} <br/>
                  {product.smell?
                     `It smells like a cherry blossom`:
                     `It has zero smell`
                  } <br/>
                  {product.description}  <img src={product.img}/>
                  Price:${product.price}  in stock:{product.qty}

                  <form method="POST" action={`/products/${product._id}?_method=DELETE`}>
                          <input type="submit" value="DELETE"/>
                  </form>
                  <form method="POST" action={`/products/${product._id}?_method=PUT`}>
                          <input type="submit" value="BUY"/>
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
