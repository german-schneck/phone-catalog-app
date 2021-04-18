// Dependencies
import styled from 'styled-components';
import Constants from '../../../../config/layout';

export const Layout = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, minmax(0%, 100%));
	grid-column-gap: 32px;
	grid-row-gap: 32px;
	
  @media screen and (min-width: 0px) and (max-width: ${Constants.sizing.MAX_MOBILE_WIDTH}px) {
  	grid-template-columns: repeat(1, minmax(0%, 100%));
	}

  @media screen and (min-width: ${Constants.sizing.MAX_MOBILE_WIDTH}px) and (max-width: 930px) {
    grid-template-columns: repeat(2, minmax(0%, 100%));
  }
	
  @media screen and (min-width: 930px) and (max-width: 1100px) {
  	grid-template-columns: repeat(3, minmax(0%, 100%));
	}
	
`;

export const ListItem = styled.li``;
