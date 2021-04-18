// Dependencies
import React from 'react';

// Styled Components
import {
  Layout,
  Icon
} from './styles';

function IconButton({ icon, alt, onClick = () => {} }) {
  return (
		<Layout onClick={onClick}>
			<Icon src={icon} alt={alt} />
		</Layout>
  );
}

export default IconButton;
