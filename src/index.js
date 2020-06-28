import React from "react";
import ReactDOM from "react-dom";
import Avatar from "./Avatar";

const Space = ({space}) => {
  return (
    <div style={{margin: `${space}px`}}></div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Avatar title="Arya Stark" subtitle="Girls with no name" showName />
    <Space space="10" />
    <Avatar title="Jon Snow" subtitle="Lord Commander of night watch" showName />
    <Space space="10" />
    <Avatar title="Jon Snow" subtitle="Lord Commander of night watch" showName />
  </React.StrictMode>,
  rootElement
);
