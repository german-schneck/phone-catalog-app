// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../../components/navigation/Header';
import SuperModal from '../../components/modals/SuperModal';

function UIProvider({ children }) {
  return (
		<React.Fragment>
			{/* Header */}
			<Header />
			<SuperModal />

			<div>
				{children}
			</div>
		</React.Fragment>
  );
}

UIProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default UIProvider;
