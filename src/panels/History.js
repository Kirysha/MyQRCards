import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  Button,
  CardGrid,
  ContentCard,
  Group,
  Panel,
  PanelHeader,
} from "@vkontakte/vkui";
import { Icon28QrCodeOutline } from "@vkontakte/icons";
import bridge from "@vkontakte/vk-bridge";

const History = ({ id, setActivePanel, setCurentLink }) => {
  const go = (e) => {
    bridge.send("VKWebAppOpenCodeReader").then(({ code_data }) => {
      if (code_data) {
        //window.location = code_data;
        setCurentLink(code_data);
        setActivePanel("frame");
        bridge.send("VKWebAppStorageSet", { key: code_data, value: code_data });
      }
    });
  };
  const open = (code_data) => () => {
    setCurentLink(code_data);
    setActivePanel("frame");
  };
  useEffect(() => {
    bridge.send("VKWebAppStorageGetKeys").then(({ keys }) => setData(keys));
  });
  const [data, setData] = useState([]);
  return (
    <Panel id={id}>
      <PanelHeader>История</PanelHeader>
      <Group>
        <CardGrid size="l">
          {data.map((item) => (
            <ContentCard
              key={item}
              //subtitle={"Должность"}
              header={item}
              //caption={"a"}
              onClick={open(item)}
            />
          ))}
        </CardGrid>
      </Group>

      <Button
        style={{ position: "fixed", right: 10, bottom: 10, zIndex: 2 }}
        size="m"
        onClick={go}
      >
        <Icon28QrCodeOutline />
      </Button>
    </Panel>
  );
};

History.propTypes = {
  id: PropTypes.string.isRequired,
  setActivePanel: PropTypes.func.isRequired,
  setCurentLink: PropTypes.func.isRequired,
};

export default History;
