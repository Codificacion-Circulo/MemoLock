import React from "react";
import "./LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  return (
    <div>
      {/* <section><span class="loader-11"></span></section> */}
      <section>
        <span class="loading__anim"></span>
      </section>
    </div>
  );
};

export default LoadingSpinner;
