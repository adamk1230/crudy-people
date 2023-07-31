import Container from '@mui/material/Container';
import { ErrorBoundary } from 'react-error-boundary';
import { AddPerson } from '@/components/AddPerson/AddPerson';
import { PersonCardContainer } from '@/components/PersonCardContainer/PersonCardContainer';
import { ErrorPage } from '@/components/ErrorPage';

export default function Home() {
  return (
    <main>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Container maxWidth="lg">
          <div className="flex justify-end mt-8">
            <AddPerson />
          </div>
          <div className="mt-8">
            <PersonCardContainer />
          </div>
        </Container>
      </ErrorBoundary>
    </main>
  );
}
