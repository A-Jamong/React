// JavaScript를 사용해 Node.js 런타임 환경에서 실행시킬 프로그램 작성

import liveServer from 'live-server';

const params = {
  host: 'localhost',
  port: 3000,
  open: false,
  mount: [['/', './public']],
  // '/': './public'는 웹 서버의 루트 경로(/)를 현재 프로젝트 디렉토리 내의 ./public 디렉토리에 매핑하라는 의미
};

liveServer.start(params);