function ziplist(list1, list2) {
  let i = 0;
  let final = [];
  while (i < list1.length) {
    final.push(list1[i]);
    final.push(list2[i]);
    i++;
  }
  return final;
}

const list1 = [1, 3, 5, 7];
const list2 = [2, 4, 6, 8];
console.log(ziplist(list1, list2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(list1, list2));
