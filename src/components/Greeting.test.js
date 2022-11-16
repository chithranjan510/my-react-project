import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('renders "Hello World" text is there', () => {
    //Arange
    render(<Greeting />);

    //Act
    //...nothing to act on

    //Assert
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" text is there', () => {
    //Arange
    render(<Greeting />);

    //Act
    //...nothing to act on

    //Assert
    const textElement = screen.getByText('good to see you', {exact: false});
    expect(textElement).toBeInTheDocument();
  });

  test('renders "everything changed" text if the button is clicked', () => {
    //Arange
    render(<Greeting />);

    //Act
    const changedTextElement = screen.getByRole('button');
    userEvent.click(changedTextElement);

    //Assert
    const changedText = screen.getByText('everything changed');
    expect(changedText).toBeInTheDocument();
  });

  test('does not renders "good to see you" if the button was clicked', () => {
    //Arange
    render(<Greeting />);

    //Act
    const changedTextElement = screen.getByRole('button');
    userEvent.click(changedTextElement);

    //Assert
    const changedText = screen.queryByText('good to see you', {exact: false});
    expect(changedText).toBeNull();
  });
});
