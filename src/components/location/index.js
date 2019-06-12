import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="This is a unique title"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.720393836276!2d3.1525789541466693!3d6.655586219244624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9ea0971aeeb3%3A0x9ccac9675a826850!2sCanaancity!5e0!3m2!1sen!2sng!4v1560292390132!5m2!1sen!2sng"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};
export default Location;
