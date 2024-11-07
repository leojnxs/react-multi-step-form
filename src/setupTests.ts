// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

const nodeCrypto = require("crypto");

(window as any).crypto = {
    randomUUID: function () {
    return nodeCrypto.randomUUID()
  },
};
