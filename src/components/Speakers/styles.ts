import styled from "styled-components";

export const SpeakersSection = styled.section`
  background-color: #f5fffd;
  padding: 120px 24px 80px;

  @media (min-width: 1024px) {
    padding: 200px 10% 150px;
  }
`;

export const SpeakersContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  h2 {
    font-size: 40px;
    font-weight: 500;
    line-height: 110%;
    color: var(--green-300);
    text-align: center;
  }

  p {
    color: #373c3b;

    font-size: 40px;
    font-weight: 600;
    line-height: 110%;
    text-align: center;

    margin-top: 120px;
  }
`;
