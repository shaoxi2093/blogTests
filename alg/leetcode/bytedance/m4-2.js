var loudAndRich = function (richer, quiet) {
  const map = new Map();
  function findRicher(x) {
    if (map.has(x)) {
      return map.get(x);
    }
    let result = [x];

    for (let richArr of richer) {
      if (richArr[1] == x) {
        result = [...result, richArr[0], ...findRicher(richArr[0])];
      }
    }
    console.log(`richer than ${x} array======>`, result);
    const resultSet = [...new Set(result)];
    map.set(x, resultSet);
    return resultSet;
  }
  return quiet.map((arr, i) => {
    const richers = findRicher(i);
    return richers.sort((a, b) => quiet[a] - quiet[b])[0];
  });
};

console.log(
  "result ===============================================>>>> ",
  loudAndRich(
    [
      [1, 0],
      [2, 1],
      [3, 1],
      [3, 7],
      [4, 3],
      [5, 3],
      [6, 3],
    ],
    [3, 2, 5, 4, 6, 1, 7, 0]
  )
);
