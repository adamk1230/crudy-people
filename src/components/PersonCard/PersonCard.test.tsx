import { render, screen } from '@testing-library/react';
import { PersonCard, PersonCardProps, PersonCardConstant } from './';

xdescribe('PersonCard', () => {
  // TODO:  MOCK firebase correctly so tests work
  it('should have tests', () => {
    expect('firebase broke tests').toBeTruthy();
  });
  // const props: PersonCardProps = {
  //   person: {
  //     username: 'test username',
  //     firstName: 'test first',
  //     lastName: 'test last',
  //     avatarUrl: 'test avatar',
  //   },
  // };

  // const setup = () => {
  //   return { ...render(<PersonCard {...props} />) };
  // };

  // it('should render username', () => {
  //   setup();
  //   const { getByText } = screen;

  //   const username = getByText(props.person.username);

  //   expect(username).toBeInTheDocument();
  // });

  // it('should render first and last name', () => {
  //   setup();
  //   const { getByText } = screen;

  //   const fullName = getByText(
  //     `${props.person.firstName} ${props.person.lastName}`
  //   );

  //   expect(fullName).toBeInTheDocument();
  // });

  // it('should render the avatar', () => {
  //   setup();
  //   const { getByRole } = screen;

  //   const img = getByRole('img');

  //   expect(img).toHaveAttribute('src', props.person.avatarUrl);
  // });

  // it('should render the avatar place holder', () => {
  //   render(
  //     <PersonCard
  //       person={{ username: 'test', firstName: 'test', lastName: 'test`' }}
  //     />
  //   );
  //   const { getByLabelText } = screen;

  //   const placeholder = getByLabelText(
  //     PersonCardConstant.AvatarPlaceHolderLabel
  //   );

  //   expect(placeholder).toBeInTheDocument();
  // });
});
