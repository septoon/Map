import ErrorRepository from '../src/js/ErrorRepository';

test('with correct number', () => {
  const received = ErrorRepository.error(403);
  const expected = 'Forbidden';

  expect(received).toEqual(expected);
});

test('with wrong number', () => {
  const received = ErrorRepository.error(505);
  const expected = 'Unknown error';

  expect(received).toEqual(expected);
});

test('empty', () => {
  const received = ErrorRepository.error();
  const expected = 'Unknown error';

  expect(received).toEqual(expected);
});
