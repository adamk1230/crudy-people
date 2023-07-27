'use client';
import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface HeaderProps {
  title: string;
}

export const TitleBar: FC<HeaderProps> = ({ title }) => {
  return (
    <AppBar position="static" className="bg-prussian-blue">
      <Toolbar>
        <Typography variant="h5" component="div" className="font-sans">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
