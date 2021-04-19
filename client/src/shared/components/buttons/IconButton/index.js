// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

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

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default IconButton;
