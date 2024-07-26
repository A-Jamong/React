import { createElement as ce } from "https://esm.sh/react";

/*
헷갈리면 먼저 마크업 해보기 html로.
<figure aria-lable="이름(온라인)">
  <img src="face.jpg" alt="이름" />
  <figcaption>
  <svg></svg>
  </figcaption>
</figure>
*/

/*
props:{
  name: '사용자 이름',
  photo : '이지미 파일 이름',
  status?: 'online' | 'offline' | 'dont-disturb' | 'away'
  // ? 붙은 건 옵셔널
  size?: 숫자 값
}
  */

// offline 으로 기본값 설정
function Avatar({ name, photo, status = "offline", size = 64 }) {
  //지역 변수
  let iconPath = "";
  let statusMessage = "";

  //switch문 사용
  switch (status) {
    default:
    case "offline":
      iconPath = "./public/icons/status-offline.svg";
      statusMessage = "오프라인";
      break;
    case "online":
      iconPath = "./public/icons/status-online.svg";
      statusMessage = "온라인";
      break;
    case "dont-disturb":
      iconPath = "./public/icons/status-dont-disturb.svg";
      statusMessage = "방해금지";
      break;
    case "away":
      iconPath = "./public/icons/status-away.svg";
      statusMessage = "자리비움";
      break;
  }


  const label = `${name} (${statusMessage})`;

  // JSX
  return (
    <figure className="Avatar" aria-label={label} title={label}>
      <img src={`/faces/${photo}`} alt={name} width={size} height={size} />
      <figcaption>
        <img src={iconPath} alt="" />
      </figcaption>
    </figure>
  )
}

  // return ce(
  //   "figure",
  //   {
  //     className: "Avatar",
  //     "aria-label": `${name} (상태)`,
  //   },
  //   ce("img", {
  //     src: `./public/avatars/${photo}`,
  //     alt: name,
  //     width: size,
  //     height: size,
  //   }),
  //   ce(
  //     "figcaption",
  //     null,
  //     ce("img", {
  //       src: iconPath,
  //       alt: "",
  //     })
  //   )
  // );
}

export default Avatar;
