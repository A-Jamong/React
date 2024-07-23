// --------------------------------------------------------------------------
// arrow function

// 🔶 일반 함수 선언을 화살표 함수 표현식으로 변경합니다.
// 참고: https://mzl.la/3Uej8M3
// coffeescript ->  ecmascript => 
function currencyKR(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new Error('currencyKR 함수에는 숫자 값만 전달해야 합니다.');
  }
  let price = numberWithComma(value);
  return `${price}원`;
}

// 🔶 일반 함수 선언을 화살표 함수 표현식으로 변경합니다.
// 화살표 함수 쓸 때 매개변수가 하나의 경우 () 가 없어도 되는데 혹여 변수를 추가해야할 때 괄호를 다시 써야하므로 이 부분은 컨벤셩으로 설정할 부분이다!
function numberWithComma = (value) => {
  return value.toString().replace?.(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
// function numberWithComma(value) {
//   return value.toString().replace?.(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
// }

function run() {
  let price = currencyKR(2_107_000);
  return price;
}

console.log(run());
