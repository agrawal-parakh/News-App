import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        let { title, desc } = this.props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src="https://www.theglobeandmail.com/resizer/qcNSOTfTYx48PInsSBs-ZLkYetk=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/R2HCGH6HSRF6DB3M4SA4YSTYQ4.JPG" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        );
    }
}
