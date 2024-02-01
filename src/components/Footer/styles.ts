import styled from "styled-components";

export const FooterSection = styled.footer`
  background-color: var(--green-100);
  padding: 20px 24px;

  @media (min-width: 1024px) {
    padding: 20px 10%;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;

  p.social-contact {
    font-size: 14px;
    font-weight: 500;
    line-height: 110%;
    color: var(--white);
    text-align: center;
    margin-top: 4px;

    @media (min-width: 768px) {
      font-size: 18px;
      margin-top: 8px;
    }
  }

  p.copyright {
    font-size: 12px;
    font-weight: 400;
    line-height: 110%;
    color: var(--white);
    text-align: center;
    // margin-top: 4px;

    @media (min-width: 768px) {
      font-size: 14px;
      margin-top: 8px;
    }
  }
`;
