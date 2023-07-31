'use client';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase/firebaseConfig';
import { Dispatch, SetStateAction } from 'react';

export const userRef = ref(db, 'people/');

export const peopleListener = (callBack: Dispatch<SetStateAction<any>>) =>
  onValue(userRef, (snapshot) => {
    const value = snapshot.val();

    if (value) {
      const data = Object.values(value);

      callBack(data);
    }
  });
