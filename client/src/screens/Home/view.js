// Dependencies
import React from 'react';

// Styled Components
import {
  Layout
} from './styles';

// Components
import PhoneListContainer from '../../shared/components/containers/PhoneListContainer';

// Styled Components
import { PageContainer } from '../../shared/styled-components/layout';

function HomeView() {
  return (
		<PageContainer>
			<Layout>
				<PhoneListContainer />
			</Layout>
		</PageContainer>
  );
}

export default HomeView;
