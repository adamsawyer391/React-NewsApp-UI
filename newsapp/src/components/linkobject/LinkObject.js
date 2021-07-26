import React from 'react'
import './LinkObject.css';

class LinkObject extends React.Component {
    render(){
        return (
            <div>
                <p className="link-object">{this.props.link}</p>
            </div>
        )
    }
    
}

export default LinkObject
