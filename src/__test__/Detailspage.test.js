import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Detailspage from '../component/Detailspage';

describe('Details page test for components', () => {
  test('render each  page details', () => {
    const detailspage = render(
      <Provider store={store}>
        <BrowserRouter>
          <Detailspage />
        </BrowserRouter>
      </Provider>,
    );
    expect(detailspage).toMatchSnapshot();
  });
});
