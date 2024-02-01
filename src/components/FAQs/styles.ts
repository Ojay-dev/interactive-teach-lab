import styled from "styled-components";

export const FAQSection = styled.section`
  background-color: var(--green-100);
  padding: 112px 24px 60px;

  // @media (min-width: 1024px) {
  //   padding: 200px 10% 150px;
  // }
`;

export const FAQContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  h2 {
    font-size: 32px;
    font-weight: 500;
    line-height: 110%;
    color: var(--white);
    text-align: center;
  }
`;

export const SFAQItem = styled.div`
  cursor: pointer;
`;

export const SQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 2px solid var(--white);

  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  color: var(--white);
`;

export const SAnswer = styled(SQuestion)`
  font-size: 18px;
  font-weight: 500;
  background: #abc6c673;
  padding-left: 48px;
  border-top: none;
  margin-bottom: 20px;
`;
