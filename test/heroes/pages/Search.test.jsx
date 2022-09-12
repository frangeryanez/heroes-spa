import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Search } from '../../../src/heroes';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Test in <Search />', () => {
  beforeEach(() => jest.clearAllMocks() );

  test('Should be displayed correctly with default values', () => {
    const { container } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('It should show Batman and the input with the value of the queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Search />
      </MemoryRouter>
    );
    
    const input = screen.queryByRole('textbox');
    expect(input.value).toBe('batman');
    
    const img = screen.getByRole('img');
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

    const alert = screen.getByLabelText('alert-danger');
    expect(alert.style.display).toBe('none');
  });

  test('It should show an error if the hero is not found (batman123)', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <Search />
      </MemoryRouter>
    );

    const alert = screen.getByLabelText('alert-danger');
    expect(alert.style.display).toBe('');
  });

  test('Must call navigate to the new screen', () => {
    const inputValue = 'superman';

    render(
      <MemoryRouter initialEntries={['/search']}>
        <Search />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { 
      target: { name: 'searchText', value: inputValue }
    });
    
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${ inputValue }`)
  });
});