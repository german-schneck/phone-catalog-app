// Dependencies
import React from 'react';

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

export default UIProvider;
