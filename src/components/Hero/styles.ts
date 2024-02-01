import styled from "styled-components";

export const HeroSection = styled.section<{ bgImage: string }>`
  min-height: calc(100vh - 116px);
  height: 100%;
  background-image: linear-gradient(rgba(7, 87, 79, 0.72), rgba(7, 87, 79, 0.72)), url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 70vw;
    width: 100%;
  }

  @media (min-width: 1440px) {
    max-width: 50vw;
  }
`;

export const HeroEventInfoContainer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding: 80px 20px;

  @media (min-width: 768px) {
    padding: 120px 0;
  }
`;

export const HeroEventInfoTitle = styled.h1`
  color: var(--gray-25);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;

  @media (min-width: 425px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 52px;
  }
`;

export const HeroEventInfo = styled.div`
  color: var(--gray-25);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;

  span {
    color: var(--green-200);
  }

  @media (min-width: 425px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

export const HeroCountdownContainer = styled.div`
  margin-top: 40px;
`;

export const HeroCountdownTitle = styled.h3`
  color: var(--green-200);
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 28px;

  // @media (min-width: 425px) {
  //   font-size: 24px;
  // }

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const HeroCountdownValue = styled.p`
  text-align: center;
  color: var(--white);
  font-size: 28px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 50px;
    margin-bottom: 12px;
  }
`;
export const HeroCountdownMetrics = styled.span`
  text-align: center;
  color: var(--white);
  font-size: 16px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
