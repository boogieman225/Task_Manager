import React, { Component } from 'react';

export const severity = [
    { _id: "618c3432eddf61c496096578", name: "Very Important" },
    { _id: "618c3459eddf61c49609657a", name: "Normal" },
    { _id: "618c345feddf61c49609657c", name: "Normal" },
    { _id: "618c3469eddf61c49609657e", name: "Important" },
    { _id: "618c3474eddf61c496096580", name: "Very Important" },
  ];
  
  export function getSeverity() {
    const uniqueSeverity = severity.filter((value, index, self) =>
      self.findIndex(s => s.name === value.name) === index
    );
    return uniqueSeverity;
  }
  