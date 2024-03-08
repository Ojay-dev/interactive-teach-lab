import React from "react";
import { SpeakerContainer, SpeakersColumn, SpeakersContent, SpeakersSection } from "./styles";

import chinenye from "@/assets/image/Chinenye.jpeg";
import lashone from "@/assets/image/LaShone.jpeg";

const Speakers = [
  { name: "Dr. Franca Chinenye Nwankwo", image: chinenye, role: "CEO, Company 1" },
  { name: "LaShone Croom", image: lashone, role: "CEO, Company 1" },
];

const SpeakersComponent: React.FC = () => {
  1;
  return (
    <SpeakersSection id="Speakers">
      <SpeakersContent>
        <h2>Speakers</h2>

        <SpeakersColumn>
          {Speakers.map((speaker, index) => (
            <SpeakerContainer key={index}>
              <img src={speaker.image} alt="speaker1" />
              <h3>{speaker.name}</h3>
              {/* <p>{speaker.role}</p> */}
            </SpeakerContainer>
          ))}
        </SpeakersColumn>
      </SpeakersContent>
    </SpeakersSection>
  );
};

export default SpeakersComponent;
