
export function unflatten(arr) {
  var tree = [], mappedArr = {}, arrElem, mappedElem;

  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id]["children"] = [];
  }

  for (var id in mappedArr) {
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      if (mappedElem.parentid) {
        mappedArr[mappedElem["parentid"]]["children"].push(mappedElem);
      } else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}
