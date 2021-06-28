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
  const [data, setData] = useState(["testItem"]);

  useEffect(() => {
    bridge
      .send("VKWebAppStorageGetKeys")
      .then(({ keys }) => setData(data.concat(keys)));
  });

  const go = (e) => {
    bridge.send("VKWebAppOpenCodeReader").then(({ code_data }) => {
      if (code_data) {
        //window.location = code_data;
        const id = code_data
          .replace("https://card.myqrcards.com/links/", "")
          .replace("/info", "");
        setCurentLink(code_data);
        setData(data.concat(id));
        bridge.send("VKWebAppStorageSet", { key: id, value: code_data });
        setActivePanel("frame");
      }
    });
  };
  const open = (code_data) => () => {
    setCurentLink("https://card.myqrcards.com/links/" + code_data + "/info");
    setActivePanel("frame");
  };
  return (
    <Panel id={id}>
      <PanelHeader>История</PanelHeader>
      <Group>
        <CardGrid size="l">
          {data.map((item) => (
            <ContentCard
              key={item}
              subtitle={"Id"}
              header={item}
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
