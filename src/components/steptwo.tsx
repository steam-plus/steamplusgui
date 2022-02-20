import { Text, View, Button, useEventHandler } from "@nodegui/react-nodegui";
import { QPushButtonSignals } from "@nodegui/nodegui";
import React from "react";
import open from "open";

export function StepTwo() {
  const steamlibrary = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => open("steam://open/games").catch(console.log),
    },
    []
  );
  const link = useEventHandler<QPushButtonSignals>(
    {
      clicked: () => open("https://www.google.com").catch(console.log),
    },
    []
  );
  return (
    <View style={containerStyle}>
      <Button
        style={btnStyle}
        on={link}
        text={`Link account`}
      ></Button>
      <Button
        style={btnStyle}
        on={steamlibrary}
        text={`Open your Steam library`}
      ></Button>
    </View>
  );
}

const containerStyle = `
      flex: 1;
      justify-content: 'space-around';
      `;

const textStyle = `
      padding-right: 20px;
      `;

const btnStyle = `
      margin-horizontal: 20px;
      height: 40px;
      `;
