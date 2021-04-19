// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import {
  Layout,
  Icon,
  Label,
  ImageSource,
  Value
} from './styles';

function SpecIndicator({ icon, value, label }) {
  return (
		<Layout>
			<Icon>
				<ImageSource src={icon} alt={label} />
			</Icon>
			<Label>{label}</Label>
			<Value>{value}</Value>
		</Layout>
  );
}

SpecIndicator.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default SpecIndicator;
