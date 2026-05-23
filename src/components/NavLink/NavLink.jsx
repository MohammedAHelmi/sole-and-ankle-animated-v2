import React from "react";
import styled from "styled-components";
import { QUERIES, WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegates }) => {
  return (
    <Wrapper {...delegates}>
      <LinkText>{children}</LinkText>
      <LinkText aria-hidden={true}>{children}</LinkText>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  overflow: hidden;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  
  position: relative;
  &:first-of-type {
    color: var(--color-secondary);
  }
`;
    
const LinkText = styled.div`
  white-space: nowrap;
  ${Wrapper} &:last-of-type {
    position: absolute;
  }
  
  @media (prefers-reduced-motion: no-preference){
    transition: transform 200ms ease-in-out;
    ${Wrapper}:hover & {
      transform: translateY(-100%);
      transition: transform 200ms ease-in-out;
    }
  }
`

export default NavLink;