import React from 'react';
import styled from 'styled-components';

const LogoSVG = styled.svg`
  width: ${props => props.size || '192px'};
  height: ${props => props.size || '192px'};
`;

const Logo = ({ size }) => (
  <LogoSVG size={size} viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="192" height="192" rx="32" fill="#E5F0FF"/>
    <path 
      d="M48 96C48 68.386 70.386 46 98 46H144C147.314 46 150 48.686 150 52V140C150 143.314 147.314 146 144 146H98C70.386 146 48 123.614 48 96Z" 
      fill="#0066FF"
    />
    <path 
      d="M98 66C81.431 66 68 79.431 68 96C68 112.569 81.431 126 98 126H130V66H98Z" 
      fill="#E5F0FF"
    />
    <circle cx="98" cy="96" r="15" fill="#0066FF"/>
  </LogoSVG>
);

export default Logo;
