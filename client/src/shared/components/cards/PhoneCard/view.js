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
  onPress,
  photo,
  price,
  variants
}) {
  const renderPrice = useMemo(() => `${formatNumberToPrice(price, currency)}`, [price, currency]);

  const renderFinancedPrice = useMemo(() => {
    const quota = 12;
    const total = (price / quota).toFixed(2);

    return `o en ${quota} plazos de ${formatNumberToPrice(total, currency)}`;
  }, [price, currency]);

  return (
		<Layout>
			<PhoneImage src={photo} alt={name} />
			<Data>
				<Name>{name}</Name>
				<AvailableColours>Disponible en {variants.length} colores</AvailableColours>

				<Price>{renderPrice}</Price>
				<Financed>{renderFinancedPrice}</Financed>
			</Data>
		</Layout>
  );
}

export default PhoneCardView;
