// Dependencies
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

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
      variants={variants}
      currency={currency}
      onClick={onClickCard}
    />
  );
}

PhoneCard.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.oneOf(['eur']).isRequired,
  onClick: PropTypes.func
};

export default PhoneCard;
