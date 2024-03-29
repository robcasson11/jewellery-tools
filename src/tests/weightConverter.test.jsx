import { expect, test } from "vitest";
import convertWeight from "../functions/weightConverter";

test("Converts 10 grams of gold", () => {
  let values = {
    gold: "",
    plat: "",
    sil: "",
    wax: "",
  };
  const setValues = (object) => {
    values = { ...object };
  };
  convertWeight("gold", 10, values, setValues);
  expect(Number(values.plat)).toBe(16.6);
  expect(Number(values.sil)).toBe(9.0);
  expect(Number(values.wax)).toBe(0.71);
});
