import React, { Component } from 'react';

export default class NewsItem extends Component {

    render() {
        let { title, desc, imageurl,url } = this.props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={imageurl} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={url} target="_blank"  className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </>
        );
    }
}
