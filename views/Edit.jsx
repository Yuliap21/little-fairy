const React = require('react');
const DefaultLayout = require('./layouts/Default.jsx');
class Edit extends React.Component {
  render(){
    return (
      <DefaultLayout title="Edit Page" styles={[{key: 0, href: '/css/app.css'}, { key: 1, href: '/css/editpage.css'}]}>
        <form method="POST" action={`/products/${this.props.product._id}?_method=PUT`}>
        Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
        Color: <input type="text" name="color"  defaultValue={this.props.product.color}/><br/>
        Smell:
            { this.props.product.smell
              ? <input type="checkbox" name="smell" defaultChecked />
              : <input type="checkbox" name="smell"/>
            }
        <br/>
        Description: <input type="text" name="description" defaultValue={this.props.product.description}/><br/>
        Img: <input type="img" name="img" defaultValue={this.props.product.img}/><br/>
        Price: <input type="number" name="price" defaultValue={this.props.product.price}/><br/>
        Qty: <input type="number" name="qty" defaultValue={this.props.product.qty}/><br/>

        <input type="submit" value="Submit Changes"/>
        </form>
      </DefaultLayout>
    )
  }
}
module.exports = Edit;
