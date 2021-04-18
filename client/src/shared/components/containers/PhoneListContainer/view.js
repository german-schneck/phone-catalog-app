// Dependencies
import React from 'react';

// Styled Components
import { Layout, ListItem } from './styles';

// Components
import PhoneCard from '../../cards/PhoneCard';

const mock = [
  {
    photo: 'https://www.movistar.es/estaticos/imagenes/terminales-moviles/ficha-445/samsung-galaxy-s21-5g-gris-04.png',
    shortDesc: 'Épico. En todos los sentidos. Galaxy S21 Ultra 5G diseñado con una sola cámara en los contornos de un marco para crear una revolución en fotografía. Equipo sin cargador ni auriculares.',
    price: '859',
    currency: 'eur',
    variants: [
      {
        id: 0,
        label: 'Plata'
      },
      {
        id: 1,
        label: 'Negro'
      },
      {
        id: 2,
        label: 'Dorado'
      },
      {
        id: 3,
        label: 'Rosa'
      }
    ],
    name: 'Samsung Galaxy S21',
    specs: {
      processor: 'Exynos 2100',
      megapixels: 12,
      screenSize: 6.2,
      battery: 400,
      internalStorage: 128,
      ram: 8
    }
  }
];

function PhoneListContainerView() {
  return (
		<Layout>
			{(mock).map((phone, index) => (
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
