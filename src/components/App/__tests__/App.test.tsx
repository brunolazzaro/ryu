import React from 'react';
import renderer from 'react-test-renderer';
import App from 'components/App';

jest.useFakeTimers();

test('App renders', () => {
  // Render Component
  const component = renderer.create(<App info="hey" />);

  const link = component.root.find((el) => el.type === 'a');

  expect(link.children[0]).toBe('Hello, ');
  expect(link.children[1]).toBe('hey');
});
