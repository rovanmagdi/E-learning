import React from "react";
import CourseDetailsComponent from "../component/courseDetailsComponent";
import GetAppComponent from "../component/GetAppComponent";
import PagesCoverComponent from "../component/pagesCoverComponent";

export default function DetailsCourse() {
  return (
    <>
      <PagesCoverComponent firstWord="Courses " secondWord="Details" />
      <CourseDetailsComponent />
      <GetAppComponent />
    </>
  );
}
