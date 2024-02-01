import React from "react";
import { FooterContent, FooterSection } from "./styles";

import { Instagram } from "@/assets/svg";

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterContent>
        <a href="">
          <Instagram />
        </a>
        <p className="social-contact">Follow us on Instagram, to catch up on our activities </p>
        <p className="copyright">&copy; 2024 INTERACTIVE TEACH LAB, All Rights Reserved.</p>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer;
