import React from "react";
import PropTypes from "prop-types";

import "./Persik.css";
import { Button, Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";
import { Icon24Back } from "@vkontakte/icons";
const Frame = (props) => (
  <Panel id={props.id}>
    <Button
      style={{ position: "fixed", left: 5, top: 5, zIndex: 2 }}
      size="s"
      onClick={() => props.setActivePanel("history")}
      mode="tertiary"
    >
      <Icon24Back fill="#fff" />
    </Button>
    {props.curentLink && (
      <iframe
        id="my_iframe"
        style={{ flex: 1 }}
        src={props.curentLink}
        onLoad={(e) => console.log()}
        seamless
      ></iframe>
    )}
  </Panel>
);

Frame.propTypes = {
  id: PropTypes.string.isRequired,
  setActivePanel: PropTypes.func.isRequired,
  curentLink: PropTypes.string.isRequired,
};

export default Frame;
