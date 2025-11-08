import React from "react";

function Team() {
  return (
    //Team
    <div className="container">
      <div className="row p-5 border-top">
        <h2 className="fs-3   text-center">People</h2>
      </div>

      <div
        className="row p-5   text-muted"
        style={{ lineHeight: "1.8", fontSize: "1rem" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "65%" }}
          />
          <h4>Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen. Connect on Homepage / TradingQnA /
            Twitter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
