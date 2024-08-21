// 목적
import { useEffect } from 'react';
import { useImmer } from 'use-immer';
// 네트워크 요청/응답 처리하기 위한 상태 - 로딩 / 오류 / 데이터
// 사용법
// const {status, error, date }= useFetch(url);

// if(status === 'idle | loading | success | error') {...}
// if(error|| status==='error'){...}
// if(status==='sucess'||data){...}

function useFetch(url) {
  const [state, setState] = useImmer({
    status: 'pending',
    error: null,
    data: null,
  });

  useEffect(() => {
    const abordController = new AbortController();
    const fetchData = async () => {
      //요청
      //응답
    };
  });

  return state;
}
export default useFetch;
