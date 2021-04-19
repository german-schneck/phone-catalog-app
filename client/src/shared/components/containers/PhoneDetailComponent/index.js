// Dependencies
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Styled Components
import {
  Layout,
  Picture,
  ImageSource,
  Title,
  ShortDescription,
  Block,
  Specs
} from './styles';

// Assets
import CPUIcon from '../../../assets/icons/cpu.svg';
import BatteryIcon from '../../../assets/icons/battery.svg';
import MemoryIcon from '../../../assets/icons/memory.svg';
import CameraIcon from '../../../assets/icons/camera.svg';
import ScreenSizeIcon from '../../../assets/icons/screen-size.svg';

// Selectors
import { getPhoneById } from '../../../../redux/modules/phones/selectors';

// Components
import SpecIndicator from '../../misc/SpecIndicator';

function PhoneDetailComponent({ id }) {
  // Hooks
  const phone = useSelector(state => getPhoneById(state, id));

  return (
		<Layout>
			<Block>
				<Picture>
					<ImageSource src={phone.photo} />
				</Picture>
			</Block>
			<Block>
				<Title>{phone.name}</Title>
				<ShortDescription>{phone.shortDesc}</ShortDescription>

				<Specs>
					<SpecIndicator
						icon={CPUIcon}
						label={'Procesador'}
						value={phone.specs.processor.toString()}
					/>
					<SpecIndicator
						icon={CameraIcon}
						label={'Megapixeles'}
						value={phone.specs.megapixels.toString()}
					/>
					<SpecIndicator
						icon={ScreenSizeIcon}
						label={'Tamaño de Pantalla:'}
						value={`${phone.specs.screenSize.toString()}"`}
					/>
					<SpecIndicator
						icon={BatteryIcon}
						label={'Tipo de batería:'}
						value={`${phone.specs.battery.toString()} mAh`}
					/>
					<SpecIndicator
						icon={MemoryIcon}
						label={'Memoria interna'}
						value={`${phone.specs.internalStorage.toString()} GB`}
					/>
					<SpecIndicator
						icon={MemoryIcon}
						label={'RAM'}
						value={phone.specs.ram.toString()}
					/>
				</Specs>
			</Block>
		</Layout>
  );
}

PhoneDetailComponent.propTypes = {
  id: PropTypes.string.isRequired
};

export default PhoneDetailComponent;
