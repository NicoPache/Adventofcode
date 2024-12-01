import React from "react";
import { DayOne, DayTwo } from "../../components";

const DayChallange = ({ day }) => {
  const dictionaryDays = { 0: <DayOne />, 1: <DayTwo /> };

  return <div>{dictionaryDays[day] || "Ops.."}</div>;
};

export default DayChallange;
