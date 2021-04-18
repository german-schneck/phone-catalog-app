// Dependencies
import React, { useMemo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Styled Components
import { BackDrop } from '../../../styled-components/modals';

// GUI Selector
import { getCurrentModalData, getCurrentModalId } from '../../../../redux/modules/gui/selectors';

// Utils
import { lockMainPageScrollY } from '../../../utils/layout';

// Types
import { modalTypesId } from '../../../types/modals';

// Modals
import PhoneDetailsModal from '../contents/PhoneDetailsModal';

// Actions
import { closeModal as closeModalAction } from '../../../../redux/modules/gui/actions';

function SuperModal() {
  // Hooks
  const dispatch = useDispatch();

  // Selectors
  const currentModalId = useSelector(getCurrentModalId);
  const currentModalData = useSelector(getCurrentModalData);

  useEffect(() => {
    if (currentModalId) {
      lockMainPageScrollY(true);
    } else {
      lockMainPageScrollY(false);
    }
    return () => {
      lockMainPageScrollY(false);
    };
  }, [currentModalId]);

  const closeModal = useCallback(() => {
  	dispatch(closeModalAction());
  }, []);

  /**
	 * @function renderModalContent
	 * @description Memorized function that determines which modal to load.
	 */
  const renderModalContent = useMemo(() => {
  	const propsToPass = {
  		modalId: currentModalId,
      data: currentModalData,
      closeModal
    };

    switch (currentModalId) {
      case modalTypesId.PHONE_DETAILS:
        return (
        	<PhoneDetailsModal {...propsToPass} />
        );

      default:
        return null;
    }
  }, [closeModal, currentModalId, currentModalData]);

  return currentModalId
    ? (
			<BackDrop>
				{renderModalContent}
			</BackDrop>
      )
    : null;
}

export default SuperModal;
