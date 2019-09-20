import React from 'react';
import renderer from 'react-test-renderer';
import App from 'components/App';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

jest.useFakeTimers();

const mockStore = configureMockStore();

test('App renders', () => {
  const store = mockStore({ sample: { message: 'info' } });
  // Render Component
  const component = renderer.create(
    <Provider store={store}>
      <App info="hey" />
    </Provider>,
  );

  const link = component.root.find(el => el.type === 'a');

  expect(link.children[0]).toBe('Hello, ');
  expect(link.children[1]).toBe('hey');
});
