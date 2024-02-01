import styled from "styled-components";
import FlexDiv from "../FlexDiv";

export const PartnersSection = styled.section`
  background-color: var(--white);
  padding: 120px 24px 80px;

  @media (min-width: 1024px) {
    padding: 150px 10% 120px;
  }
`;

export const PartnersContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  h2 {
    font-size: 40px;
    font-weight: 500;
    line-height: 110%;
    color: var(--green-300);
    text-align: center;
  }

  img {
    width: 40%;
    object-fit: contain;

    @media (min-width: 768px) {
      width: 20%;
    }
  }
`;

export const PartnersList = styled(FlexDiv)`
  flex-direction: column;
  row-gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
