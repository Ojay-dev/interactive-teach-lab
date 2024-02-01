import styled from "styled-components";

export const ScheduleSection = styled.section`
  background-color: var(--green-100);
  padding: 120px 24px 80px;

  @media (min-width: 1024px) {
    padding: 200px 10% 150px;
  }
`;

export const ScheduleContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  h2 {
    font-size: 40px;
    font-weight: 500;
    line-height: 110%;
    color: var(--white);
    text-align: center;
  }
`;

export const ScheduleFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 70px;
`;

export const ScheduleCard = styled.div<{ icon?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ icon }) => icon && "justify-content: center;"}
  width: 50%;
  // max-width: 176px;
  height: 220px;
  background-color: ${({ icon }) => (icon ? "var(--white)" : "var(--green-300)")};
  padding: 50px 20px;
  text-align: center;

  h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 110%;
    color: var(--white);
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 110%;
    color: #ffac33;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    width: 25%;
    max-width: unset;
  }

  @media (min-width: 1024px) {
    height: 290px;
    padding: 80px 20px;

    h3 {
      font-size: 24px;
    }

    p {
      font-size: 20px;
    }
  }
`;
