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
  onClick = () => {}
}) {
  /**
   * @function onClickCard
   * @description It is called when the user presses on the letter,
   * It is used to send the ID and to see the details of the phone.
   */
  const onClickCard = useCallback(() => {
    onClick(id);
  }, [id]);

  return (
		<PhoneCardView
      name={name}
      photo={photo}
      price={price}
      currency={currency}
      onClick={onClickCard}
      variants={variants}
    />
  );
}

export default PhoneCard;
