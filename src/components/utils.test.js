import { unflatten } from "./utils.js";

test("unflatten should add childrens property to objects and filled them accordingly", () => {
  const initialTreeList = [
    { id: 1, name: "Lietuva", parentid: 0 },
    { id: 2, name: "Vilnius", parentid: 1 },
    { id: 3, name: "Kaunas", parentid: 1 }
  ];
  const expected = [
    {
      id: 1,
      name: "Lietuva",
      parentid: 0,
      children: [
        { id: 2, name: "Vilnius", parentid: 1, children: [] },
        { id: 3, name: "Kaunas", parentid: 1, children: [] }
      ]
    }
  ];

  const result = unflatten(initialTreeList);

  expect(result).toEqual(expected);
});
