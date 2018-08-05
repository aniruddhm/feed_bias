import React, { Component } from "react";
import * as d3 from "d3";
import articles from "./data/feed_bias.json";
import "./App.css";

import "@material/layout-grid/dist/mdc.layout-grid.min.css";

const scores = [];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentArticle: articles[0]
    };
  }

  handleClick = article => {
    this.setState({ currentArticle: article });
    window.open(article.url);
  };

  handleMouseOver = article => {
    var svg = d3.select("svg");

    svg
      .append("text")
      .attr("y", 40)
      .attr("x", ((parseFloat(article.score) + 1) / 2) * 100 + "%")
      .text(article.source)
      .attr("text-anchor", "middle");
  };

  handleMouseOut = () => {
    d3.selectAll("text").remove();
  };

  componentDidMount() {
    var svg = d3.select("svg");

    svg
      .selectAll("circle")
      .data(articles)
      .enter()
      .append("circle")
      .attr("cy", 60)
      .attr("cx", ({ score }) => {
        return ((parseFloat(score) + 1) / 2) * 100 + "%";
      })
      .attr("r", 10)
      .on("mouseover", this.handleMouseOver)
      .on("mouseout", this.handleMouseOut)
      .on("click", this.handleClick);

    svg
      .selectAll("text")
      .data(articles)
      .enter()
      .append("text")
      .attr("y", () => Math.random() * 120)
      .attr("x", ({ score }) => {
        return ((parseFloat(score) + 1) / 2) * 100 + "%";
      })
      .text(({ source }) => source)
      .attr("text-anchor", "middle");
  }
  render() {
    const { currentArticle } = this.state;
    return (
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell--span-12">
            <svg width="100%" height="120">
              <line x1="0" y1="60" x2="100%" y2="60" stroke="black" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
