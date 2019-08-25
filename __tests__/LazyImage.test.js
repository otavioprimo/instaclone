/**
 * @format
 */

import 'react-native';
import React from 'react';
import LazyImage from '../src/components/LazyImage';
import server from '../server.json';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('create component', () => {
  renderer.create(<LazyImage />);
});

it('has props corretly', () => {
  const data = server.feed[0];
  const component = <LazyImage aspectRatio={1} shouldLoad={false} smallSource={data.small} source={data.image} />
  expect(component.props.aspectRatio).toBe(1);
  expect(component.props.shouldLoad).toBe(false);
  expect(component.props.smallSource).toBe(data.small);
  expect(component.props.source).toBe(data.image);
});

it('render snapshot', () => {
  const tree = renderer.create(<LazyImage />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('render when pass props', () => {
  const data = server.feed[0];
  const component = <LazyImage shouldLoad={false} aspectRatio={1} smallSource={data.small} source={data.image}/>
  
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
})