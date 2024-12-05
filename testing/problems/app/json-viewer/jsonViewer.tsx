"use client";

import { ReactNode, useState } from "react";

const DATA: Object = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

type Node = Object | number | boolean | string | null | undefined;

export default function JsonViewer() {
  function renderNode(node: Node): ReactNode {
    const nodeType = typeof node;

    if (nodeType === undefined) {
      return "undefined";
    }

    if (nodeType === null) {
      return "null";
    }

    if (nodeType === "string") {
      return node as string;
    }

    if (nodeType === "boolean" || nodeType === "number") {
      return node?.toString();
    }

    if (Array.isArray(node)) {
      return (
        <ul>
          {node.map((item, index) => (
            <li key={index}>{renderNode(item)}</li>
          ))}
        </ul>
      );
    }

    const keys = Object.keys(node as Object);

    return (
      <ul>
        {keys.map((key) => (
          <li key={key}>
            <div>{key}</div>
            <div>{renderNode((node as any)[key] as Node)}</div>
          </li>
        ))}
      </ul>
    );
  }

  return <div>{renderNode(DATA)}</div>;
}
