import { exact, arrayOf } from 'prop-types';
import { UserType } from '../../../../../09-component-purity/src/@types/globals.d';

Users.propTypes = {
  users: arrayOf(UserType),
};

function UsersList() {
  return <div>UsersList</div>;
}

export default UsersList;
