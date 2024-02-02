import { useState } from "react";
import Logo from "@/assets/image/logo.png";
import { HeaderContainer, MenuButton, NavContainer, NavContainerMobile, RegisterLink, SDrawer } from "./styles";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" />

      <NavContainer>
        <ul>
          <li>
            <a href="#Hero">Home</a>
          </li>

          <li>
            <a href="#About">About</a>
          </li>

          <li>
            <a href="#Schedule">Schedule</a>
          </li>

          <li>
            <a href="#Speakers">Speakers</a>
          </li>

          <li>
            <a href="#FAQS">FAQs</a>
          </li>

          <li>
            <a href="#Partners">Partners</a>
          </li>
        </ul>

        <RegisterLink
          href="https://docs.google.com/forms/d/e/1FAIpQLScZ62eqkOCaO52_ZM6S_qdcgBwT_FLdbjs-gjY-Uv5VKc1jsw/viewform?vc=0&c=0&w=1&flr=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </RegisterLink>
      </NavContainer>

      <MenuButton onClick={showDrawer}>
        <MenuOutlined color="#4EA59D" />
      </MenuButton>

      <SDrawer title="Basic Drawer" placement="left" onClose={onClose} open={open} width={"70%"}>
        <NavContainerMobile>
          <ul>
            <li>
              <a href="#Hero" onClick={onClose}>
                Home
              </a>
            </li>

            <li>
              <a href="#About" onClick={onClose}>
                About
              </a>
            </li>

            <li>
              <a href="#Schedule" onClick={onClose}>
                Schedule
              </a>
            </li>

            <li>
              <a href="#Speakers" onClick={onClose}>
                Speakers
              </a>
            </li>

            <li>
              <a href="#FAQS" onClick={onClose}>
                FAQs
              </a>
            </li>

            <li>
              <a href="#Partners" onClick={onClose}>
                Partners
              </a>
            </li>
          </ul>

          <RegisterLink
            href="https://docs.google.com/forms/d/e/1FAIpQLScZ62eqkOCaO52_ZM6S_qdcgBwT_FLdbjs-gjY-Uv5VKc1jsw/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </RegisterLink>
        </NavContainerMobile>
      </SDrawer>
    </HeaderContainer>
  );
};

export default Header;
