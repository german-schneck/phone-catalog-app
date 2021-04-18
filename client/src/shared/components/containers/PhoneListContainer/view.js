// Dependencies
import React from 'react';

// Styled Components
import { Layout, ListItem } from './styles';

// Components
import PhoneCard from '../../cards/PhoneCard';

function PhoneListContainerView({ data = [] }) {
  return (
		<Layout>
			{(data).map((phone, index) => (
				<ListItem key={`--phone-item-${index.toString()}`}>
					<PhoneCard
            name={phone.name}
            price={phone.price}
            variants={phone.variants}
						photo={phone.photo}
					/>
				</ListItem>
			))}
		</Layout>
  );
}

export default PhoneListContainerView;
