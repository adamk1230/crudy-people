'use client';
import { FC, useReducer, ChangeEvent } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { writePersonData } from '@/firebase/PersonService';

type State = {
  username: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  usernameError: boolean;
  firstNameError: boolean;
  lastNameError: boolean;
  usernameTouched: boolean;
  firstNameTouched: boolean;
  lastNameTouched: boolean;
};

type Action =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_FIRSTNAME'; payload: string }
  | { type: 'SET_LASTNAME'; payload: string }
  | { type: 'SET_AVATARURL'; payload: string }
  | { type: 'VALIDATE_USERNAME' }
  | { type: 'VALIDATE_FIRSTNAME' }
  | { type: 'VALIDATE_LASTNAME' }
  | { type: 'VALIDATE_FIELDS' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_FIRSTNAME':
      return { ...state, firstName: action.payload };
    case 'SET_LASTNAME':
      return { ...state, lastName: action.payload };
    case 'SET_AVATARURL':
      return { ...state, avatarUrl: action.payload };
    case 'VALIDATE_USERNAME':
      return {
        ...state,
        usernameError: state.username === '',
        usernameTouched: true,
      };
    case 'VALIDATE_FIRSTNAME':
      return {
        ...state,
        firstNameError: state.firstName === '',
        firstNameTouched: true,
      };
    case 'VALIDATE_LASTNAME':
      return {
        ...state,
        lastNameError: state.lastName === '',
        lastNameTouched: true,
      };
    case 'VALIDATE_FIELDS':
      return {
        ...state,
        usernameError: state.username === '',
        usernameTouched: true,
        firstNameError: state.firstName === '',
        firstNameTouched: true,
        lastNameError: state.lastName === '',
        lastNameTouched: true,
      };
    default:
      return state;
  }
};

export enum PersonInformationConstant {
  AvatarUrl = 'avatar url',
  FirstNameLabel = 'first name',
  LastNameLabel = 'last name',
  UsernameLabel = 'username',
  SubmitText = 'Submit',
  CancelText = 'Cancel',
}
const {
  AvatarUrl,
  FirstNameLabel,
  LastNameLabel,
  UsernameLabel,
  SubmitText,
  CancelText,
} = PersonInformationConstant;

export interface PersonInformationProps {
  closeModal?: () => void;
}

export const PersonInformation: FC<PersonInformationProps> = ({
  closeModal,
}) => {
  const initialState: State = {
    username: '',
    firstName: '',
    lastName: '',
    avatarUrl: '',
    usernameError: false,
    firstNameError: false,
    lastNameError: false,
    usernameTouched: false,
    firstNameTouched: false,
    lastNameTouched: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch({
      type: `SET_${name.toUpperCase()}` as Action['type'],
      payload: value,
    });
  };

  const handleInputBlur = (field: string) => {
    switch (field) {
      case 'username':
        dispatch({ type: 'VALIDATE_USERNAME' });
        break;
      case 'firstName':
        dispatch({ type: 'VALIDATE_FIRSTNAME' });
        break;
      case 'lastName':
        dispatch({ type: 'VALIDATE_LASTNAME' });
        break;
      default:
        break;
    }
  };

  const handleAdd = () => {
    const { firstName, lastName, username, avatarUrl } = state;
    dispatch({ type: 'VALIDATE_FIELDS' });

    if (firstName && lastName && username) {
      writePersonData({ username, firstName, lastName, avatarUrl });
      closeModal?.();
    }
  };

  const title = 'Add Person';

  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Typography variant="h4" className="text-brilliant-blue">
          {title}
        </Typography>
      </Grid>
      <Grid xs={12}>
        <TextField
          label={UsernameLabel}
          name="username"
          value={state.username}
          onChange={handleInputChange}
          onBlur={() => handleInputBlur('username')}
          error={state.usernameError && state.usernameTouched}
          helperText={
            state.usernameError && state.usernameTouched
              ? 'User name is required'
              : ''
          }
          fullWidth
          required
        />
      </Grid>
      <Grid xs={12} sm={6}>
        <TextField
          label={FirstNameLabel}
          name="firstName"
          value={state.firstName}
          onChange={handleInputChange}
          onBlur={() => handleInputBlur('firstName')}
          error={state.firstNameError && state.firstNameTouched}
          helperText={
            state.firstNameError && state.firstNameTouched
              ? 'First name is required'
              : ''
          }
          fullWidth
          required
        />
      </Grid>
      <Grid xs={12} sm={6}>
        <TextField
          label={LastNameLabel}
          name="lastName"
          value={state.lastName}
          onChange={handleInputChange}
          onBlur={() => handleInputBlur('lastName')}
          error={state.lastNameError && state.lastNameTouched}
          helperText={
            state.lastNameError && state.lastNameTouched
              ? 'Last name is required'
              : ''
          }
          fullWidth
          required
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          label={AvatarUrl}
          name="avatarUrl"
          value={state.avatarUrl}
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid>
        <Stack spacing={2} direction="row">
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            onClick={handleAdd}
            role="button"
          >
            {SubmitText}
          </Button>
          {closeModal && (
            <Button variant="text" onClick={closeModal} role="button">
              {CancelText}
            </Button>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};
