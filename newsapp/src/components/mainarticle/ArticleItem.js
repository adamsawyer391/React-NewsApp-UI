import React from 'react'
import './ArticleItem.css'

class ArticleItem extends React.Component {
    render(){
        return (
            <div className="article-box">
                <img className="article-image" src={this.props.url} alt="" />
                <h2 className="article-headline">{this.props.headline}</h2>
            </div>
        )
    }
    
}

export default ArticleItem
