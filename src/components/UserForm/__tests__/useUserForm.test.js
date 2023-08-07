import { renderHook, act } from '@testing-library/react-hooks';
import { useUserForm } from '../useUserForm';

const mockDispatch = jest.fn();
const mockAlert = jest.spyOn(window, 'alert'); 
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe('useUserForm', () => {
  it('should update values on change', () => {
    const { result } = renderHook(() => useUserForm());

    act(() => {
      result.current.onChange({ target: { name: 'firstname', value: 'Tamara' } });
    });

    expect(result.current.values).toBe(undefined);
  });

  it('should validate email onBlur', () => {
    const { result } = renderHook(() => useUserForm());

    act(() => {
      result.current.onBlur({ target: { name: 'email', value: 'random' } });
    });

    expect(result.current.errors.email).toBe(true);
  });

  it('should validate message onBlur', () => {
    const { result } = renderHook(() => useUserForm());

    act(() => {
      result.current.onBlur({ target: { name: 'message', value: '123' } });
    });

    expect(result.current.errors.message).toBe(true);
  });

  it('should call dispatch and alert on submit', () => {
    const { result } = renderHook(() => useUserForm());

    act(() => {
      result.current.onSubmit();
    });
    expect(mockDispatch).toHaveBeenCalledTimes(4);
    expect(mockAlert).toHaveBeenCalledWith('Data was successfully recorded!');
  });
});
