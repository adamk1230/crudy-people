'use client';
import { FC, useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { PersonCard } from '@/components/PersonCard';
import { peopleListener } from '@/firebase/PeopleService';
import { Person } from '@/firebase/PersonService';

export const PersonCardContainer: FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const listener = peopleListener(setPeople);
    return () => {
      // detatch listener
      listener();
    };
  }, []);

  return (
    <Grid container spacing={2}>
      {people?.map((person) => (
        <Grid xs={12} sm={4} key={person.id}>
          <PersonCard person={person} />
        </Grid>
      ))}
    </Grid>
  );
};
