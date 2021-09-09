import React from "react";
import useContent from "../hooks/useContent";
import selection from "../utils/selection";

const Browse = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selection({ series, films });
  return <div>Browse</div>;
};

export default Browse;
