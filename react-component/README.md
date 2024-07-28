# 리액트 컴포넌트 만들기 과제

### 1. 만들어보려고 하는 건 바닐라 프로젝트 때 했던 키워드 칩

   <img src="/assets-readme/react-component.png" width=300></br>
   이런 식으로 사용되었다.</br>
   <img src="/assets-readme/react-component-where.png" width=200></br>
  만들어볼 상태는 **Default / Select / Disabled**

### 2. 수행 계획

- [x] 라이브서버 npm install live-server --save-dev
- [x] Node.js
- [x] dev 명령어 설정
- [x] import React from 'https://esm.sh/react'; import ReactDOM from 'https://esm.sh/react-dom';
- [x] ReactAPI 사용하기
- [ ] JSX 써보기
- [ ] 바벨
- [ ] 타입스크립트 
- [x] vite 는 개발 서버니까 지금처럼 간단하게 컴포넌트를 만들어볼 때는 필요하지 않다고 생각해서 패스!

### 3. 고난
1. 상태에 따라 스타일링이 다른데 어떻게 적용하지 => BEM방식으로 status와 동일한 클래스명(ex.chip--default)을 줘서 status 값만 받고서 해결할 수 있었다.
2. 선택된 상태에서만 체크 이모티콘을 넣고 싶은데 어떻게 하지 => && 연산자를 이용해서 상태가 선택됨을 인지하고 이모티콘을 child에 넣도록 해서 해결했다.
3. 선생님의 코드를 보면서 뭔가 얼렁뚱땅한 것 같아서 제대로 이해했는지 아직 헷갈린다! 시간이 부족해서 JSX로 하는 방식은 아직 못 해봐서 여러번 만들어보면서 익숙해져야할 것 같다. 