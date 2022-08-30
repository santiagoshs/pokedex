import React, { useState } from "react";

const ApiUrl = async () => {
  const apiPoke = "https://pokeapi.co/api/v2/pokemon/"
    const res = await fetch(apiPoke);
  const response = await res.json();
  const { results } = response;
  console.log(results);

};

export default ApiUrl;
