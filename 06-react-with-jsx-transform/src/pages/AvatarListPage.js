// import {createElement as ce} from '../../../04-getting-started-with-react/src/lib/virtual/createElement.js';
import {createElement as h} from "https://esm.sh/react";
import Avatar from '../components/Avatar.js';


function AvatarListPage() {

  //JSX
  return (
    <ul className="AvatarList">
      <li>
        <Avatar name="야무" photo="man-02.jpg" status="online"/>
      </li>
      <li>
        <Avatar name="범쌤" photo="man-03.jpg" status="dont-disturb"/>
      </li>
      <li>
        <Avatar name="주원" photo="man-01.jpg" status="online"/>
      </li>
    </ul>
  )


  return h(
    'ul',
    {
      className: 'AvatarList',
    },
    h('li', null, h(Avatar, { name: '야무', photo: 'man-02.jpg' })),
    h('li', null, h(Avatar, { name: '범쌤', photo: 'man-04.jpg' }))
  );
}

export default AvatarListPage;