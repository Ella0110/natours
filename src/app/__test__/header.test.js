import React from 'react';
// import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from "../layout/header";

test('render the "OutDoors" text', () => {
  render(<Header />)
  const OutDoorsText = screen.getByText('Outdoors')
  expect(OutDoorsText).toBeInTheDocument()

});