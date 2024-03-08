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

export const SpeakersColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 64px;
  row-gap: 60px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SpeakerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    font-family: "Hind", sans-serif;
    font-size: 24px;
    line-height: 110%;
    color: #212529;
    text-align: center;
    margin-top: 20px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 110%;
    margin-top: 8px;
  }
`;
