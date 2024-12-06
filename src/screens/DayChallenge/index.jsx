import React from "react";
import { DayOne, DayTwo, DayThree } from "../../components";

const DayChallange = ({ day }) => {
  const dictionaryDays = { 0: <DayOne />, 1: <DayTwo />, 2: <DayThree /> };

  return <div>{dictionaryDays[day] || "Ops.."}</div>;
};

export default DayChallange;
