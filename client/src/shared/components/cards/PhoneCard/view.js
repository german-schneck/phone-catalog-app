// Dependencies
import React, { useMemo } from 'react';

// Styled Components
import {
  Layout,
  Data,
  Name,
  AvailableColours,
  Price,
  Financed,
  PhoneImage
} from './styles';

// Types
import { formatNumberToPrice } from '../../../utils/currencies';

function PhoneCardView({
  name,
  currency,
  onClick,
  photo,
  price,
  variants
}) {
  const renderColourAvailable = useMemo(() => (
		`Disponible en ${variants.length} ${variants.length === 1 ? 'color' : 'colores'}`
  ), []);

  const renderPrice = useMemo(() => `${formatNumberToPrice(price, currency)}`, [price, currency]);

  const renderFinancedPrice = useMemo(() => {
    const quota = 12;
    const total = (price / quota).toFixed(2);

    return `o en ${quota} plazos de ${formatNumberToPrice(total, currency)}`;
  }, [price, currency]);

  return (
		<Layout onClick={onClick}>
			<PhoneImage src={photo} alt={name} />
			<Data>
				<Name>{name}</Name>
				<AvailableColours>{renderColourAvailable}</AvailableColours>

				<Price>{renderPrice}</Price>
				<Financed>{renderFinancedPrice}</Financed>
			</Data>
		</Layout>
  );
}

export default PhoneCardView;
