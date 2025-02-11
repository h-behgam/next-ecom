import React from 'react';
import Cart from './cart';
import Amazings from './amazings';
import Container from '@/components/ui/container';

export default function HomePageTemplate() {
  return (
    <>
      <Container isFullWidth>
        <Amazings />
      </Container>
    </>
  );
}
