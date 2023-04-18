import styled from 'styled-components';

const HeaderLogo = () => {
  return (
    <Logo>ChainBuy</Logo>
  )
}

const Logo = styled.h1`
  font-weight: normal;
  font-size: 40px;
  margin-left: 11px;
  font-family: 'Zilla Slab';
  letter-spacing: 3px;
  cursor: pointer;
`

export default HeaderLogo