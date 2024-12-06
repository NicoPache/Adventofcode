import { useEffect, useState } from "react";
import React from "react";
import archivo from "../constants/day3.txt";

const DayThree = () => {
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

  const mul = (num1, num2) => {
    return num1 * num2;
  };

  const solve = (input) => {
    const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don\'t\(\)/g;
    let active = true;

    let result = input.match(regex);

    let acum = 0;
    result.forEach((element) => {
      if (element === "do()") active = true;
      else if (element === "don't()") active = false;
      else if (active == true) acum += eval(element);
    });
    setResult(acum);
  };

  return <div>{result}</div>;
};

export default DayThree;
