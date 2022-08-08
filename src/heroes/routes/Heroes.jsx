import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Collapsible } from '../../ui';
import { Dc, Hero, Marvel, Search } from '../pages';

export const Heroes = () => {
  return (
    <>
      <Collapsible />
      <Container>
        <Routes>
          <Route path="marvel" element={<Marvel />} />
          <Route path="dc" element={<Dc />} />
          <Route path="search" element={<Search />} />
          <Route path="hero" element={<Hero />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </Container>
    </>
  );
};