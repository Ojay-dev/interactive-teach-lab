import React from "react";
import { AboutUsContent, AboutUsSection, AboutUsText } from "./styles";
import bgImage from "@/assets/image/group-young-people-sitting-conference-together.png";

const AboutUsComponent: React.FC = () => {
  return (
    <AboutUsSection id="About">
      <AboutUsContent>
        <img src={bgImage} alt="a lab image" />

        <AboutUsText>
          <h2>About Us</h2>
          <p>
            <span>INNOVATE TEACH LAB</span> aims to empower educators through cutting-edge Instructional Technology and Innovation
            Development Training. We are dedicated to equipping teachers, future teachers, and the community with the knowledge, skills, and
            resources necessary to embrace the ever-evolving landscape of education and business and cultivate a spirit of technology.{" "}
            <br />
            <br /> We are dedicated to being an inspiration and empowerment for educators, future teachers, and the wider community, driving
            the seamless integration of cutting-edge Instructional Technology and Innovation Development Training.
          </p>
        </AboutUsText>
      </AboutUsContent>
    </AboutUsSection>
  );
};

export default AboutUsComponent;
