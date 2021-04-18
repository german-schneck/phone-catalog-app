// Dependencies
import React from 'react';
import Loader from 'react-loader-spinner';

// Config
import Constants from '../../../../config/layout';

// Styled Components
import {
  Layout
} from './styles';

// Stateless Component
const LoaderContainer = ({ isLoading, children, customContainerStyle = {} }) => (
  isLoading
    ? (
		<Layout style={customContainerStyle}>
			<Loader
				type="TailSpin"
				color={Constants.colors.PRIMARY}
				height={70}
				width={70}
			/>
		</Layout>
      )
    : children
);

export default LoaderContainer;
