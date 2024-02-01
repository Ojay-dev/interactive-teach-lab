import React from "react";
import { PartnersContent, PartnersList, PartnersSection } from "./styles";
import FlexDiv from "../FlexDiv";

import morganUniversity from "@/assets/image/morgan-university.png";
import henessy from "@/assets/image/Henessy.png";
import thurgoodMarshall from "@/assets/image/thurgood-marshall.jpg";
import cmr from "@/assets/image/CMR.jpg";
import mhec from "@/assets/image/MHEC.jpg";
import morganTechFest from "@/assets/image/morgan-tech-fest.jpg";
import universityInnovationFellow from "@/assets/image/university-innovation-fellow.png";

const PartnersComponent: React.FC = () => {
  return (
    <PartnersSection id="Partners">
      <PartnersContent>
        <h2>Our Partners</h2>

        <FlexDiv flexDir="column" flexGap="48px" margin="50px 0 0">
          <PartnersList justifyContent="center" alignItems="center" flexGap="0 60px">
            <img src={morganUniversity} alt="Morgan State University logo" />
            <img src={henessy} alt="Henessy logo" />
            <img src={thurgoodMarshall} alt="Thurgood-Marshall logo" />
            <img src={cmr} alt="CMR logo" />
          </PartnersList>

          <PartnersList justifyContent="center" alignItems="center" flexGap="0 60px">
            <img src={mhec} alt="MHEC logo" />
            <img src={morganTechFest} alt="morgan-tech-fest logo" />
          </PartnersList>

          <PartnersList justifyContent="center" alignItems="center" flexGap="0 60px">
            <img src={universityInnovationFellow} alt="university-innovation-fellow logo" />
          </PartnersList>
        </FlexDiv>
      </PartnersContent>
    </PartnersSection>
  );
};

export default PartnersComponent;
