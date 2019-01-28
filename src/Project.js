import React from "react";

const Project = props => {
  const { title, image, description, link } = props.project;
  return (
    <div className="col">
      <article className="img-container project">
        <div className="card">
          <div className="card-img-top">
            <img src={image} alt="profile" />
          </div>
          <div className="card-body">
            <div className="card-title">
              <h3>{title}</h3>
            </div>
            <div className="card-text">
              <p className="font-weight-light">{description}</p>
              <a className="search-link" href={link}>
                <span>
                  <i className="fas fa-external-link-alt" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Project;
