// Dependencies
import styled from 'styled-components';
import Constants from '../../../../config/layout';

export const Layout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: 50px;
  height: 50px;
	margin-bottom: 8px;
  border: 1px solid ${Constants.colors.PRIMARY};
`;

export const Label = styled.div`
	font-size: 14px;
	font-family: ${Constants.fonts.MEDIUM};
  line-height: 18px;
	text-align: center;
`;

export const ImageSource = styled.img`
	width: 22px;
	height: 22px;
`;

export const Value = styled.div`
  font-family: ${Constants.fonts.LIGHT};
	font-size: 14px;
	line-height: 18px;
	margin-top: 4px;
`;
