import React from 'react'
import courses from '../data/courses'
import Cart from './Cart.js'
import './Courses.css'

export default class Course extends React.Component {

  constructor(props) {
    //var Cart = Document.getElementById("C
    super(props);
    this.cart_element = React.createRef();
    this.state = {
      course_count : 0,
      course_list : {},
    }

    this.courses2string = (dict) => {
      var ret_string = "";
      for (var key in dict) {
        ret_string = ret_string + key + "\n";
      }
      return ret_string;
    }

    this.handle_change = (number) => {
      console.log("Clicked, new value = " + number);
      var checked =  document.getElementById(String(number)).checked;
  
      if (checked) {
        this.state.course_count++;
        this.state.course_list[number] = "";
      }
      else {
        this.state.course_count--;
        delete this.state.course_list[number];
      }
  
      if (this.state.course_count > 7) {
        document.getElementById(String(number)).checked = false;
        this.state.course_count--;
        delete this.state.course_list[number];
        return
      }

      var course_string = this.courses2string(this.state.course_list);
      console.log(course_string);
  
      this.cart_element.current.courses_display(course_string);
      
    }
  }

  render() {

    return (
      <div>
        {courses.map(({ dept, number }) => (
          <label class="switch">
            <input id={number} type="checkbox" onClick= {() => this.handle_change(number)} ></input>
            <span class="slider"></span>
            <p key={`${dept}-${number}`}>
              {dept}
              {' '}
              {number}
            </p>
          </label>
        ))}
        <Cart ref={this.cart_element}/>
      </div>
      
      
    )
  }

}
