import {render, screen} from '@testing-library/react'

import Async from './Async';

describe('Async component', () => {
  test('renders the posts', async() => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: 'id1', title: 'first post'}]
    })
    render(<Async />)

    const postElement = await screen.findAllByRole('listitem');

    expect(postElement).not.toHaveLength(0);
  })
})