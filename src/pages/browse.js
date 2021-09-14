import React from "react";
import useContent from "../hooks/useContent";
import selection from "../utils/selection";
import { BrowseContainer } from "../containers/browse";

const Browse = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selection({ series, films });
  return <BrowseContainer slides={slides} />;
};

export default Browse;
