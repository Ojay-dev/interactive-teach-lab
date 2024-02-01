import styled from "styled-components";

export const AboutUsSection = styled.section`
  background-color: #ddedec;
  padding: 120px 24px 80px;

  @media (min-width: 1024px) {
    padding: 200px 10% 150px;
  }
`;

export const AboutUsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-width: 1280px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 234px;
    object-fit: cover;
  }

  @media (min-width: 600px) {
    img {
      width: 70%;
      height: 334px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 60%;
      height: 334px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    img {
      width: 45%;
      height: 434px;
    }
  }
`;

export const AboutUsText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  h2 {
    font-size: 32px;
    font-weight: 600;
    line-height: 110%;
    color: var(--black);
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 170%;
    color: var(--gray-100);
    text-align: justify;
    margin-top: 16px;
  }

  p > span {
    color: var(--green-300);
    font-weight: 500;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 40px;
      font-weight: 600;
      line-height: 110%;
      color: var(--black);
    }

    p {
      font-size: 20px;
      margin-top: 20px;
    }
  }

  @media (min-width: 1024px) {
    width: 45%;
    margin-top: unset;
  }
`;
