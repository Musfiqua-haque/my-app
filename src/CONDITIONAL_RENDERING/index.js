import React, { Component } from 'react'
 import Home from './Home.JS'
import Login from './Login'

 class CONDITIONAL_RENDERING extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin: false
      }
    }
    
  render() {

    const{isloggedin} = this.state
    let element;

    element = isloggedin ? <Home/> : <Login/>
    return(
        <div>
            {element}
        </div>
    )
    
    }
    
}

export default CONDITIONAL_RENDERING;