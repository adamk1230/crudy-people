'use client';
import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface HeaderProps {
  title: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#004062',
    },
  },
});

export const TitleBar: FC<HeaderProps> = ({ title }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" className="font-sans">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
