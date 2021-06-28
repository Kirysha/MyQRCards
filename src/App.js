import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import { AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import History from "./panels/History";
import Frame from "./panels/Frame";

const App = () => {
  const [activePanel, setActivePanel] = useState("history");
  const [curentLink, setCurentLink] = useState(null);
  const [data, setData] = useState(["testItem"]);

  useEffect(() => {
    bridge
      .send("VKWebAppStorageGetKeys")
      .then(({ keys }) => setData(data.concat(keys)));
  });
  //const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  // useEffect(() => {
  //   bridge.subscribe(({ detail: { type, data } }) => {
  //     if (type === "VKWebAppUpdateConfig") {
  //       const schemeAttribute = document.createAttribute("scheme");
  //       schemeAttribute.value = data.scheme ? data.scheme : "client_light";
  //       document.body.attributes.setNamedItem(schemeAttribute);
  //     }
  //   });
  //   async function fetchData() {
  //     const user = await bridge.send("VKWebAppGetUserInfo");
  //     setUser(user);
  //     setPopout(null);
  //   }
  //   fetchData();
  // }, []);

  return (
    <AdaptivityProvider>
      <AppRoot>
        <View activePanel={activePanel}>
          <History
            id="history"
            setActivePanel={setActivePanel}
            setCurentLink={setCurentLink}
            data={data}
            setData={setData}
          />
          <Frame
            id="frame"
            setActivePanel={setActivePanel}
            curentLink={curentLink}
          />
        </View>
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
