import { FC, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Person } from '@/firebase/PersonService';

export interface PersonCardProps {
  person: Person;
}

export enum PersonCardConstant {
  AvatarPlaceHolderLabel = 'avatar placeholder',
}
const { AvatarPlaceHolderLabel } = PersonCardConstant;

export const PersonCard: FC<PersonCardProps> = ({
  person: { username, firstName, lastName, avatarUrl },
}) => {
  const [imageError, setImageError] = useState<boolean>(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card sx={{ minWidth: 300 }}>
      {imageError || !avatarUrl ? (
        <div
          className="h-[200px] bg-gray-300"
          aria-label={AvatarPlaceHolderLabel}
        ></div>
      ) : (
        <CardMedia
          component="img"
          image={avatarUrl}
          alt="Avatar"
          sx={{ height: 200 }}
          onError={handleImageError}
        />
      )}
      <CardContent>
        <Typography variant="h6" align="center">
          {username}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {firstName} {lastName}
        </Typography>
      </CardContent>
    </Card>
  );
};
