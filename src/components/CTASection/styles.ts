import styled from "styled-components";

export const CTASection = styled.section<{ bgImage: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 50px 24px 80px;

  @media (min-width: 1024px) {
    padding: 100px 10% 120px;
  }
`;

export const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;

  h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 110%;
    color: var(--white);
    text-align: center;
    line-height: 40px;

    @media (min-width: 1024px) {
      font-size: 48px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 110%;
    color: var(--white);
    text-align: center;
    max-width: 600px;
    margin: 16px auto 0;
    line-height: 24px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const RegisterLink = styled.a`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
  text-decoration: none;

  background-color: var(--green-100);
  color: var(--white);
  padding: 16px 30px;
  border-radius: 8px;
  margin-top: 32px;

  &:hover {
    color: var(--white);
  }
`;
