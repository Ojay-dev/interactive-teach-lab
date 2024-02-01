import React from "react";
import { CTAContent, CTASection, RegisterLink } from "./styles";
import bannerImage from "@/assets/image/banner_home.jpg";

const CTAAreaComponent: React.FC = () => {
  return (
    <CTASection bgImage={bannerImage}>
      <CTAContent>
        <h3>Are you Ready to Take action?</h3>

        <p>Are you ready to tackle the problem of inadequate creativity, innovation, and training in technology for teachers?</p>

        <RegisterLink href="#" target="_blank" rel="noopener noreferrer">
          Register now
        </RegisterLink>
      </CTAContent>
    </CTASection>
  );
};

export default CTAAreaComponent;
