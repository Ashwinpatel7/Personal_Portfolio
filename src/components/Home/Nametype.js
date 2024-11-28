// src/components/Home/NameType.js
import React from "react";
import Typewriter from "typewriter-effect";

function NameType() {
  return (
    <Typewriter
      options={{
        strings: ["Ashwin Patel"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default NameType;