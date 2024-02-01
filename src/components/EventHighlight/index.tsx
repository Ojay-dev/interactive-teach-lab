import React from "react";
import { EventHighlightContent, EventHighlightSection, EventHighlightText } from "./styles";
import bgImage from "@/assets/image/image2024-01-20.jpeg";
import { CheckIcon } from "@/assets/svg";

const EventHighlightComponent: React.FC = () => {
  return (
    <EventHighlightSection>
      <EventHighlightContent>
        <EventHighlightText>
          <h2>Event Highlights</h2>

          <ul>
            <li>
              <CheckIcon /> Expert-led sessions.
            </li>
            <li>
              <CheckIcon /> Interactive discussions and Q/A Sessions.
            </li>
            <li>
              <CheckIcon /> Networking Opportunities
            </li>
            <li>
              <CheckIcon /> Feedback and assessment.
            </li>
            <li>
              <CheckIcon /> Collaborative activities.
            </li>
          </ul>
        </EventHighlightText>

        <img src={bgImage} alt="a tech lab" />
      </EventHighlightContent>
    </EventHighlightSection>
  );
};

export default EventHighlightComponent;
