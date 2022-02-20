import { Text, View } from "@nodegui/react-nodegui";
import React from "react";
const dogImg = require("./dog");

export function StepOne() {
  return (
    <View style={containerStyle}>
      <Text wordWrap={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut accusamus quos voluptates accusantium dolorum delectus labore maxime! Placeat eius mollitia vero maxime consequatur blanditiis voluptates voluptatum ad cum neque.
      </Text>
    </View>
  );
}

const containerStyle = `
    margin-horizontal: 20px;
    padding-horizontal: 10px;
`;
