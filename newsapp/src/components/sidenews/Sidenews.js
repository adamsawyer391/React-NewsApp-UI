import React from 'react';
import './Sidenews.css'

class Sidenews extends React.Component {
    render(){
        return(
            <div className="block">
                <p className="side-headline-headline">{this.props.text}</p>
                <p className="byline">
                    <p className="writer">{this.props.byline}</p>
                    <p className="pipe">|</p>
                    <p className="date">{this.props.date}</p>
                </p>
                <p className="lead">{this.props.lead}</p>
            </div>
            
        )
    }
}
export default Sidenews;
