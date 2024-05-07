import React from 'react';
import styled from '@emotion/styled';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';

const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

export default function HomePage() {
  return (
    <Container>
      <TopNavbar />
      {/* <--- Home Page ---> */}
      <Footer />
    </Container>
  );
}
