import { styled } from "styled-components";
import { Property } from "csstype";

type FlexableDivProps = {
  width?: Property.Width;
  height?: Property.Height;
  flexGap?: Property.Gap;
  margin?: Property.Margin;
  mb?: Property.MarginBottom;
  justifyContent?: Property.JustifyContent;
  wrap?: Property.FlexWrap;
  alignItems?: Property.AlignItems;
  flexDir?: Property.FlexDirection;
  maxwidth?: Property.MaxWidth;
};

const FlexDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => !["width", "height", "flexGap", "mb", "justifyContent", "wrap", "alignItems", "flexDir"].includes(prop),
})<FlexableDivProps>`
  display: flex;
  gap: ${({ flexGap }) => flexGap && flexGap};
  margin: ${({ margin }) => margin && margin};
  margin-bottom: ${({ mb }) => mb && mb};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  flex-wrap: ${({ wrap }) => wrap && wrap};
  flex-direction: ${({ flexDir }) => flexDir && flexDir};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  max-width: ${({ maxwidth }) => maxwidth && maxwidth};
`;

export default FlexDiv;
