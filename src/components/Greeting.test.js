import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('Hello World text is there or not', () => {
    //Arange
    render(<Greeting />);

    //Act
    //...nothing to act on

    //Assert
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });
});
