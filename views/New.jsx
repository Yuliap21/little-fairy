const React = require('react');
const DefaultLayout = require('./layouts/Default');

class New extends React.Component {
  render(){
    return (
      <DefaultLayout title={'Make A New Product'}>
      <h1>Make a New Product</h1>

      <form action="/products" method="POST">
                       Name: <input type="text" name="name" /><br/>
                       Color: <input type="text" name="color" /><br/>
                       Smell: <input type="checkbox" name="smell" /><br/>
                       Description: <input type="text" name="description" /><br/>
                       Img: <input type="img" name="img"/><br/>
                       Price: <input type="number" name="price" /><br/>
                       Qty: <input type="number" name="qty" /><br/>
                       <input type="submit" name=" " value="Create Product"/>
                     </form>
  </DefaultLayout>
)
  }
}
module.exports = New;
