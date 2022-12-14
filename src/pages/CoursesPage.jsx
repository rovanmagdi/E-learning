import React from "react";
import CoursesTab from "../component/coursesTab";
import GetAppComponent from "../component/GetAppComponent";
import PagesCoverComponent from "../component/pagesCoverComponent";

export default function Courses() {
  
  return (
    <>
      <PagesCoverComponent firstWord="My" secondWord="Courses" />
      <CoursesTab />
      <GetAppComponent/>
    </>
  );
}
