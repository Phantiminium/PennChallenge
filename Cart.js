import React from 'react'

export default class Cart extends React.Component {
  
  constructor(props) {
    //var Cart = Document.getElementById("Cart");
    super(props);
    this.state = {
      courses:  ""
    }

    this.courses_display = (course_string) => {
      var cart = document.getElementById("Cart");
      if (course_string) {
        this.state.courses = course_string;
      }
      else {
        this.state.courses = "Your cart is currently empty!";
      }

      cart.innerHTML = this.state.courses;
    }
  }

  

  render() {

    return (
      <div style={{
        border: '1px solid rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        marginBottom: '1.5rem',
        borderRadius: '4px',
      }}>
        <h4>Course Cart</h4>

        <p id="Cart">Your cart is currently empty!</p>
      </div>
    )
  }
}

