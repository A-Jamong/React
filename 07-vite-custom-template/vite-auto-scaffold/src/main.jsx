import React from 'react';
import { createRoot } from 'react-dom/client';

console.log(createRoot)



  const label = `${name} (${statusMessage})`;

  return (
    <figure className="Avatar" aria-label={label} title={label}>
      <img src={`/faces/${photo}`} alt={name} width={size} height={size} />
      <figcaption>
        <img src={iconPath} alt="" />
      </figcaption>
    </figure>
  );
}



const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(<AvatarListPage />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
