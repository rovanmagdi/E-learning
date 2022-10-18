import React from "react";
import NotFoundComponent from "../component/notFoundComponent";
import PagesCoverComponent from "../component/pagesCoverComponent";

export default function NotFound() {
  return (
    <>
      <PagesCoverComponent firstWord="Page Not" secondWord="Found" />
      <NotFoundComponent/>
      
    </>
  );
}
