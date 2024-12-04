import React, { useEffect, useState } from "react";
import archivo from "../constants/day1.txt";
const DayChallenge = () => {
  const [raw, setRaw] = useState("");

  useEffect(() => {
    fetch(archivo)
      .then((r) => r.text())
      .then((text) => {
        const rows = text.trim().split("\n");
        const columns = rows[0].trim().split(/\s+/).length;

        const columnsData = Array.from({ length: columns }, () => []);

        saveInArrays(columnsData, rows, columns);
        columnsData[0].sort();
        columnsData[1].sort();
        acumDiff(columnsData);
        setRaw(multiplicarRepetidos(columnsData[0], columnsData[1]));
      });
  }, []);

  const multiplicarRepetidos = (listaUno, listaDos) => {
    let acumTotal = 0;

    for (let i = 0; i < listaUno.length; i++) {
      let acumXNumero = 0;

      for (let j = 0; j < listaDos.length; j++) {
        if (listaUno[i] == listaDos[j]) acumXNumero++;
      }
      if (acumXNumero != 0) {
        acumTotal += listaUno[i] * acumXNumero;
      }
    }
    return acumTotal;
  };

  const acumDiff = (columnsData) => {
    let acum = 0;
    for (let i = 0; i < columnsData[0].length; i++) {
      acum += Math.abs(columnsData[0][i] - columnsData[1][i]);
    }
    return acum;
  };

  const saveInArrays = (columnsData, rows, columns) => {
    for (let i = 0; i < rows.length; i++) {
      rows[i] = rows[i]
        .trim()
        .split(" ")
        .filter((e) => e != "");
      for (let j = 0; j < columns; j++) {
        columnsData[j].push(rows[i][j]);
      }
    }
  };

  return (
    <div>
      <h1>{raw}</h1>
    </div>
  );
};

export default DayChallenge;
