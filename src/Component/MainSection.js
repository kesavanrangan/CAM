import React, { Component } from "react";
import "./Nab.css";
import background from "../Image/Key.jpg";

class MainSection extends Component {
  render() {
    return (
      <section id="explore-section" class="bg-light text-muted">
        <div className="container main">
          <h2 className="head mb-5">Centeralized Access Management</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src={background}
                alt="hello"
                id="image-section"
                class="img-fluid mb-3 rounded-circle"
              />
            </div>
            <div className="col-md-6 text-center">
              <h3>Explore & Connect</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore, itaque consequatur voluptates minus inventore ratione!
              </p>

              <div className="d-flex">
                <div className="align-self-start p-4">
                  <i className="fas fa-check"></i>
                </div>
                <div className="align-self-end">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                  minima quam quae quibusdam impedit praesentium.
                </div>
              </div>
              <div className="d-flex">
                <div className="align-self-start p-4">
                  <i className="fas fa-check"></i>
                </div>
                <div className="align-self-end">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
                  minima quam quae quibusdam impedit praesentium.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default MainSection;
