import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import Questions from "../src/components/questions.jsx";

import extraData from "./data";

export default class Index extends React.Component {
  render() {
    const localScope = assign({ React, Questions }, this.props.scope || {}, extraData);
    return (
      <div className="component-documentation">
        {Index.Components.map((component, index) => (
          <div key={index}>
            <h3 id={component.title}>{component.title}</h3>
            {component.examples.map((example, subindex) => (
              <div key={subindex}>
                {example.title ? <h4>{example.title}</h4> : null}
                <Playground codeText={example.code}
                  scope={assign(localScope, example.extraScope || {})}
                  noRender={example.noRender}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

Index.propTypes = {
  scope: React.PropTypes.object
};

Index.Components = [
{ title: "Questions",
  examples: [
    {
      type: "playground",
      code: require("raw!./examples/questions.example"),
      noRender: true,
      extraScope: {demoData: extraData.demoData}
    }
  ],
  options: {
    image: require("./images/Questions.png")
  }
}
];
