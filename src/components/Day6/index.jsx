import { useEffect, useState } from "react";
import React from "react";
import archivo from "../constants/day6.txt";

const DaySix = () => {
  const [result, setResult] = useState("");
  useEffect(() => {
    fetch(archivo)
      .then((response) => response.text())
      .then((text) => {
        const input = text;
        solve(input);
      })
      .catch((error) => console.error("Error leyendo el archivo :(", error));
  }, []);

  const solve = (input) => {
    setResult(acum);
  };

  return <div>{result}</div>;
};

export default DaySix;
