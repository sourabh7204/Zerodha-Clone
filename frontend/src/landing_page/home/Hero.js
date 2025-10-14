import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="\media\images\homeHero.png"
          alt="Hero-Image"
          className="mb-5 "
        />
        <h1 className="">Invest in everything</h1>
        <p className="mt-1">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 mt-4 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", backgroundColor: "#387ED1" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
