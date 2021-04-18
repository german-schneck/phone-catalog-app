// Dependencies
import React, { useCallback } from 'react';

// View
import PhoneCardView from './view';

function PhoneCard({
  id,
  name,
  photo,
  price,
  variants,
  currency,
  onPress = () => {}
}) {
  const onPressCard = () => useCallback(() => {
    onPress(id);
  }, []);

  return (
		<PhoneCardView
      name={name}
      photo={photo}
      price={price}
      currency={currency}
      onPress={onPressCard}
      variants={variants}
    />
  );
}

export default PhoneCard;
