// Dependencies
import React from 'react';

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

export default SpecIndicator;
