// Dependencies
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// View Components
import HomeView from './view';

// Actions
import { fetchPhonesList } from '../../redux/modules/phones/actions';

// Selectors
import {
  getPhoneList,
  getPhoneListIsLoading
} from '../../redux/modules/phones/selectors';

function Home() {
  // Hooks
  const dispatch = useDispatch();

  // Selectors
  const isLoading = useSelector(getPhoneListIsLoading);
  const phoneList = useSelector(getPhoneList);

  useLayoutEffect(() => {
    dispatch(fetchPhonesList());
  }, []);

  console.log({ isLoading, phoneList });

  return (
		<HomeView />
  );
}

export default Home;
