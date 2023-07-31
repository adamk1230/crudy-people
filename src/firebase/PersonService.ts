import { v4 as uuidv4 } from 'uuid';
import { ref, set, update } from 'firebase/database';
import { db } from '../firebase/firebaseConfig';

export interface Person {
  avatarUrl?: string;
  firstName: string;
  id?: string;
  lastName: string;
  username: string;
}

const PATH = 'people/';

export const writePersonData = ({
  avatarUrl,
  firstName,
  lastName,
  username,
}: Person) => {
  const id = uuidv4();
  set(ref(db, PATH + id), {
    avatarUrl,
    firstName,
    id,
    lastName,
    username,
  });
};

export const editPersonData = ({
  avatarUrl,
  firstName,
  id,
  lastName,
  username,
}: Person) => {
  const updates = {
    [PATH + id]: {
      avatarUrl,
      firstName,
      id,
      lastName,
      username,
    },
  };

  update(ref(db), updates);
};
