import { AddPerson } from '@/components/AddPerson/AddPerson';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <main>
      <Container maxWidth="lg">
        <div className="flex justify-end mt-8">
          <AddPerson />
        </div>
      </Container>
    </main>
  );
}
