const React = require('react');
class New extends React.Component {
  render(){
    return (
      <div>
      <h1>New Page Here</h1>

      <form action="/products" method="POST">
                       Name: <input type="text" name="name" /><br/>
                       Color: <input type="text" name="color" /><br/>
                       Smell: <input type="checkbox" name="smell" /><br/>
                       <input type="submit" name=" " value="Create Product"/>
                     </form>
  </div>)
  }
}
module.exports = New;
