import React from "react";
import {
  DayOne,
  DayTwo,
  DayThree,
  DayFour,
  DayFive,
  DaySix,
} from "../../components";

const DayChallange = ({ day }) => {
  const dictionaryDays = {
    0: <DayOne />,
    1: <DayTwo />,
    2: <DayThree />,
    3: <DayFour />,
    4: <DayFive />,
    5: <DaySix />,
  };

  return <div>{dictionaryDays[day] || "Ops.."}</div>;
};

export default DayChallange;
