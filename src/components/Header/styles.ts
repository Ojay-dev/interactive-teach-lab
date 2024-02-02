import { Drawer } from "antd";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);

  padding: 16px 24px;

  @media (min-width: 1024px) {
    padding: 16px 10%;
  }

  img {
    width: 151px;
  }
`;

export const NavContainer = styled.nav`
  display: none;
  align-items: center;
  justify-content: center;
  column-gap: 48px;
  ul {
    display: flex;
    list-style: none;
    margin-left: auto;
    margin-bottom: 0;
    align-items: center;

    li {
      margin-left: 32px;
      font-size: 14px;
      font-weight: 600;
    }

    a {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 110%;

      text-decoration: none;
      color: var(--green-100);
    }
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const NavContainerMobile = styled(NavContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-left: unset;
    align-items: center;

    li {
      margin-left: unset;
      margin-bottom: 24px;
      // font-size: 18px;
      // font-weight: 500;
    }
  }
`;

export const RegisterLink = styled.a`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  text-decoration: none;

  background-color: var(--green-100);
  color: var(--white);
  padding: 12px 30px;
  border-radius: 8px;

  &:hover {
    color: var(--white);
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SDrawer = styled(Drawer)`
  .ant-drawer-header {
    display: none;
  }
`;
