import React from "react";
import { Select, TextInput } from "@fremtind/jokul";

export function App() {
  return (
    <div>
      <h1>Hello, world!</h1>

      <TextInput label={"Yeah"}></TextInput>
      <Select
        label={"Hello"}
        items={["Abc", "123"]}
        name={"My name"}
        onChange={(e) => {
          console.log(e);
        }}
      ></Select>
    </div>
  );
}
