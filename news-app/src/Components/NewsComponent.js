import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class NewsComponent extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <div className="row">
            <div className="col-md-4">
              <NewsItem title="news-title" desc="description" />
            </div>
            <div className="col-md-4">
              <NewsItem title="news-title" desc="description" />
            </div>
            <div className="col-md-4">
              <NewsItem title="news-title" desc="description" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
