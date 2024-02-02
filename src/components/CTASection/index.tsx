import React from "react";
import { CTAContent, CTASection, RegisterLink } from "./styles";
import bannerImage from "@/assets/image/banner_home.jpg";

const CTAAreaComponent: React.FC = () => {
  return (
    <CTASection bgImage={bannerImage}>
      <CTAContent>
        <h3>Are you ready to take action?</h3>

        <p>Are you ready to tackle the problem of inadequate creativity, innovation, and training in technology for teachers?</p>

        <RegisterLink
          href="https://docs.google.com/forms/d/e/1FAIpQLScZ62eqkOCaO52_ZM6S_qdcgBwT_FLdbjs-gjY-Uv5VKc1jsw/viewform?vc=0&c=0&w=1&flr=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register now
        </RegisterLink>
      </CTAContent>
    </CTASection>
  );
};

export default CTAAreaComponent;
