// Dependencies
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

// Styled Components
import {
  Layout,

  TopContainer,
  TopNavigator,
  TopNavigatorItem,

  MainContainer,
  HeaderContent,

  Logotype,
  LogoImg
} from './styles';
import { PageContainer } from '../../../styled-components/layout';

// Assets
import LogotypeImage from '../../../assets/images/logotype.svg';

// Components
import NavigationMenu from '../NavigationMenu';

function Header({
  topNavigationRoutes = [],
  mainNavigationRoutes = []
}) {
  const renderTopNavigation = useMemo(() => (
			<TopContainer>
				<PageContainer>
					<TopNavigator>
						{topNavigationRoutes.map((route, index) => (
							<TopNavigatorItem
								key={`--top-navigator-item-${index.toString()}`}
								to={route.path}
							>
								{route.label}
							</TopNavigatorItem>
						))}
					</TopNavigator>
				</PageContainer>
			</TopContainer>
  ), [topNavigationRoutes]);

  const renderMainHeader = useMemo(() => (
  	<MainContainer>
			<HeaderContent>
				{/* Logotype */}
				<Logotype to={'/'}>
					<LogoImg src={LogotypeImage} alt={'Moviefake'} />
				</Logotype>

				{/* Navigation */}
				<NavigationMenu />
			</HeaderContent>
		</MainContainer>
  ), [mainNavigationRoutes]);

  return (
		<Layout>
			{renderTopNavigation}
			{renderMainHeader}
		</Layout>
  );
}

Header.propTypes = {
  topNavigationRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

export default Header;
