// --------------------------------------------------------------------------
// spread syntax
// - 전개 구문을 사용해 배열 병합
// - 전개 구문을 사용해 객체 병합
// --------------------------------------------------------------------------

function combineArray() {
  const numberList = [2, -2, 1];
  const countList = [101, 201, 301];

  // 두 배열을 하나로 합하려면?
  const nList = numberList.concat(countList);
  console.log(nList);

  const myResult = numberList.slice(0,2).concat(countList.slice(0,2)).concat([numberList.at(-1)]);
  console.log(myResult)

  const combineList = countList
    .slice(0, 2)
    .concat(numberList)
    .concat(countList.slice(2));

  console.log(combineList);

  // 🔶 전개 구문을 사용해 spreadCombineList 배열 병합 코드를 작성하세요.
  // 참고: https://mzl.la/43TCLgA | https://mzl.la/3VTzEDh | https://mzl.la/3vC07ec
  const spreadCombineList = [];
  console.log(spreadCombineList);

  // 아래 결과 값이 true가 나와야 합니다.
  console.log(Object.is(combineList.length, spreadCombineList.length));
}

function combineObject() {
  const defaultOptions = {
    startIndex: 0,
    loop: false,
  };

  const customOptions = {
    loop: true,
  };

  const combineOptions = Object.assign({}, defaultOptions, customOptions);
  console.log(combineOptions);

  // 🔶 전개 구문을 사용해 spreadCombineOptions 객체 병합 코드를 작성하세요.
  // 참고: https://mzl.la/43TCLgA
  const spreadCombineOptions = {
    ...defaultOptions,
    ...customOptions
  };
  console.log(spreadCombineOptions);

  // 아래 결과 값이 true가 나와야 합니다.
  console.log(Object.is(combineOptions.loop, spreadCombineOptions.loop));
}

function run() {
  combineArray();
  combineObject();
}

run();
