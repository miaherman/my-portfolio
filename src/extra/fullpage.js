import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
export default function ReactFullpageWrapper(props) {

  return (
    <ReactFullpage
      licenseKey={"xxxxxxxx-xxxxxxxx-xxxxxxxx-xxxxxxxx"}
      scrollingSpeed={1000} /* Options here */
      render={() => {
        return (
          <ReactFullpage.Wrapper>
              {props.children}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}