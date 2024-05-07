import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled('footer')(() => ({
  backgroundColor: '#333',
  color: '#fff',
  marginTop: 'auto',
}));

const FooterContent = styled('div')(() => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const CompanyName = styled('div')(() => ({
  marginTop: '20px',
  textAlign: 'center',
  width: '100%',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CompanyName>© 2024 Vidyalai Interview Challenge</CompanyName>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
