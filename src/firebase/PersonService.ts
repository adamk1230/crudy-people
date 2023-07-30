import { v4 as uuidv4 } from 'uuid';
import { ref, set } from 'firebase/database';
import { db } from '../firebase/firebaseConfig';

export interface Person {
  id?: string;
  username: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
}

const PATH = 'people/';

export const writePersonData = ({
  username,
  firstName,
  lastName,
  avatarUrl,
}: Person) => {
  const id = uuidv4();
  set(ref(db, PATH + id), {
    id,
    username,
    firstName,
    lastName,
    avatarUrl,
  });
};
