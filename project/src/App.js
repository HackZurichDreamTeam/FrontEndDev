//import React from 'react';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


import React, { Component } from 'react';
  
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultImage:
'https://upload.wikimedia.org/wikipedia/commons/f/f7/Europe_laea_location_map.svg',
        };
    }
  
    // replace image function
    replaceImage = (error) => {
        //replacement of broken Image
        error.target.src = this.state.defaultImage; 
    }
  
    render() {
        return (
            <div style={{ width: "0px" }}>
  
                <div className='imageDiv'
                    style={{ border: '1px', 
                        margin: "10px", }}>
                    <img
                        src=""
                        alt="You broke it"
                        onError={this.replaceImage}
                        width='1600px'
                        height='900px'
                    />
                </div>
            </div>
        );
    }
}
  
export default App;