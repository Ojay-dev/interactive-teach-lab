import styled from "styled-components";

export const EventHighlightSection = styled.section`
  background-color: var(--white);
  overflow: hidden;
  padding-left: 24px;

  @media (min-width: 1024px) {
    padding-left: 10%;
  }
`;

export const EventHighlightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 60px;

  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  img {
    // width: 50%;
    height: 615px;
    object-fit: cover;

    @media (min-width: 1024px) {
      width: 50%;
      height: 815px;
    }

    @media (min-width: 1280px) {
      margin-right: -200px;
    }
  }
`;

export const EventHighlightText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  h2 {
    font-size: 32px;
    font-weight: 500;
    line-height: 110%;
    color: var(--green-100);
    margin-bottom: 32px;

    @media (min-width: 768px) {
      font-size: 48px;
      margin-bottom: 72px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    list-style: none;

    @media (min-width: 768px) {
      row-gap: 50px;
    }
  }

  li {
    display: flex;
    align-items: center;
    column-gap: 32px;

    font-size: 20px;
    font-weight: 500;
    line-height: 110%;
    color: var(--gray-100);

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
