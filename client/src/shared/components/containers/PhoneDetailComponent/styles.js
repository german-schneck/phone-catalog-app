// Dependencies
import styled from 'styled-components';
import Constants from '../../../../config/layout';

export const Layout = styled.div`
	padding: 12px 48px 48px;
	display: grid;
	grid-template-columns: 0fr 1fr;
	grid-column-gap: 42px;
	grid-row-gap: 22px;

  @media screen and (min-width: 0px) and (max-width: ${Constants.sizing.MAX_MOBILE_WIDTH}px) {
    grid-template-columns: 1fr;
  }
`;

export const Block = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
`;

export const Picture = styled.div`
  display: flex;
	
  @media screen and (min-width: 0px) and (max-width: ${Constants.sizing.MAX_MOBILE_WIDTH}px) {
    justify-content: center;
		align-items: center;
  }
`;

export const ImageSource = styled.img`
	width: 200px;
`;

export const Title = styled.h2`
	margin: 12px 0;

  @media screen and (min-width: 0px) and (max-width: ${Constants.sizing.MAX_MOBILE_WIDTH}px) {
		text-align: center;
  }
`;

export const ShortDescription = styled.div`
	font-family: ${Constants.fonts.LIGHT};
	line-height: 22px;
	font-size: 14px;

  @media screen and (min-width: 0px) and (max-width: ${Constants.sizing.MAX_MOBILE_WIDTH}px) {
    text-align: center;
  }
`;

export const Specs = styled.ul`
	margin-top: 22px;
	display: grid;
	grid-template-columns: repeat(2, minmax(0%, 100%));
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  @media screen and (min-width: 0px) and (max-width: ${Constants.sizing.MAX_MOBILE_WIDTH}px) {
    grid-column-gap: 32px;
  }
`;
