import React from "react";
import { EventHighlightContent, EventHighlightSection, EventHighlightText } from "./styles";
import bgImage from "@/assets/image/image2024-01-20.jpeg";
// import { CheckIcon } from "@/assets/svg";

const EventHighlightComponent: React.FC = () => {
  return (
    <EventHighlightSection>
      <EventHighlightContent>
        <EventHighlightText>
          <h2>Event Highlights</h2>

          <ul>
            <li>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.56641 18.0494L11.8181 23.301L24.9472 10.1719"
                  stroke="#4EA59D"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Expert-led sessions</span>
            </li>
            <li>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.56641 18.0494L11.8181 23.301L24.9472 10.1719"
                  stroke="#4EA59D"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Interactive discussions and Q/A Sessions</span>
            </li>
            <li>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.56641 18.0494L11.8181 23.301L24.9472 10.1719"
                  stroke="#4EA59D"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Networking Opportunities</span>
            </li>
            <li>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.56641 18.0494L11.8181 23.301L24.9472 10.1719"
                  stroke="#4EA59D"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Feedback and assessment</span>
            </li>
            <li>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.56641 18.0494L11.8181 23.301L24.9472 10.1719"
                  stroke="#4EA59D"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Collaborative activities</span>
            </li>
          </ul>
        </EventHighlightText>

        <img src={bgImage} alt="a tech lab" />
      </EventHighlightContent>
    </EventHighlightSection>
  );
};

export default EventHighlightComponent;
