// --------------------------------------------------------------------------
// ES5 Constructor (like. Class) with Module Pattern (IIFE)



// 🔶 Class 구문을 사용해 ApiClient 클래스를 작성합니다.
// 참고: https://mzl.la/3UdwrNE

import { _ApiClient as AC } from "./api/ApiClient";

const todosService = new AC(
  'https://jsonplaceholder.typicode.com/todos'
);

// --------------------------------------------------------------------------

run.readAll = () => todosService.readAll();

run.readOne = () => todosService.readOne(1);

run.create = () =>
  todosService.create({
    id: 0,
    userId: 0,
    title: 'ES 클래스 구문',
    completed: false,
  });

run.update = () =>
  todosService.update(2, {
    completed: true,
  });

run.delete = () => todosService.delete(3);

async function run() {
  try {
    const response = await run.readAll();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

run();
