import React, { Component } from 'react';
import './homepage.style.scss'
import Directory from '../../components/directory/directory.components'

class Homepage extends Component {
    state = {}
    render() { 
        return ( 
            <div className="homepage">
                <Directory/>
            </div>
         );
    }
}
 
export default Homepage;