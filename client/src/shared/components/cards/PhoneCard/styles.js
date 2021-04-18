// Dependencies
import styled from 'styled-components';
import Constants from '../../../../config/layout';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Constants.colors.WHITE};
  box-shadow: 0 2px 15px 7px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  padding: 30px;

  &:hover {
    box-shadow: 0 2px 15px 7px rgba(0, 0, 0, 0.10);
  }
	
	transition: all ${Constants.transitions.MEDIUM};
	cursor: pointer;
`;

export const Data = styled.div`
	padding-top: 32px;
`;

export const Name = styled.h4`
	font-family: ${Constants.fonts.MEDIUM};
	color: ${Constants.colors.BLACK};
	font-size: 16px;
`;

export const AvailableColours = styled.span`
	font-size: 12px;
	color: ${Constants.colors.PRIMARY};
`;

export const Price = styled.div`
	margin-top: 18px;
	font-family: ${Constants.fonts.BOLD};
	color: ${Constants.colors.GREEN};
	font-size: 18px;
	line-height: 24px;
`;

export const Financed = styled.div`
  font-size: 12px;
  color: ${Constants.colors.SECONDARY};
  line-height: 18px;
	font-family: ${Constants.fonts.MEDIUM};
`;

export const PhoneImage = styled.img`
  height: 330px;
  object-fit: contain;
`;
