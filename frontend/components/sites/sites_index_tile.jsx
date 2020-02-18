import React from "react";
import { Link } from "react-router-dom";

const SiteTile = props => {
  let booked = "";

  if (props.booked) {
    booked = "site-tile-booked";
  }

  return (
    <div key={props.site.id} className="index-site-tile">
      <Link to={`/sites/${props.site.id}`} style={{ textDecoration: "none" }}>
        <div className="site-tile-img-container">
          {<img className="site-tile-img" src={props.site.img} alt="" />}
        </div>
        <div className="site-tile-info">
          <div className="site-tile-info-description">
            <div className="site-tile-info-title">
              <h4>{props.site.title}</h4>
            </div>
            <div className="site-tile-info-site-type">
              <p>{props.site.site_type}</p>
            </div>
          </div>
          <div className="site-tile-info-specs">
            <div className="site-tile-info-cost">
              <p>${props.site.cost} / night</p>
            </div>
            <div className="site-tile-booked-container">
              <div className={booked}></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SiteTile;
