// Dependencies
import React from 'react';

// Styled Components
import { Layout, ListItem } from './styles';

// Components
import PhoneCard from '../../cards/PhoneCard';

function PhoneListContainerView({ data = [], onClickPhone = () => {} }) {
  return (
		<Layout>
			{(data).map((phone, index) => (
				<ListItem key={`--phone-item-${index.toString()}`}>
					<PhoneCard
						id={phone.id}
            name={phone.name}
            price={phone.price}
            variants={phone.variants}
						photo={phone.photo}
						onClick={onClickPhone}
					/>
				</ListItem>
			))}
		</Layout>
  );
}

export default PhoneListContainerView;
