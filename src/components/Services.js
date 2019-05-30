import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Clita lorem sadipscing tempor dolore lorem lorem kasd ipsum. Et."
      },
      {
        icon: <FaHiking />,
        title: "free cocktails",
        info: "Clita lorem sadipscing tempor dolore lorem lorem kasd ipsum. Et."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Clita lorem sadipscing tempor dolore lorem lorem kasd ipsum. Et."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Clita lorem sadipscing tempor dolore lorem lorem kasd ipsum. Et."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
