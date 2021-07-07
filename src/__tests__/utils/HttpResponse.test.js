import { HttpResponse } from './../../app/utils'

describe('HttpResponse - Error messages', () => {
  test('It returns the correct message for 401 errors', () => {
    const message = 'You must be authenticated to perform this action.';
    const error = HttpResponse.handle({ status: 401 });

    expect(error.message).toEqual(message);
  });

  test('It returns the correct message for 403 errors', () => {
    const message = 'You do not have the necessary permissions to perform this action.';
    const error = HttpResponse.handle({ status: 403 });

    expect(error.message).toEqual(message);
  });

  test('It returns the correct message for 404 errors', () => {
    const message = 'The resource you\'re trying to access could not be found.';
    const error = HttpResponse.handle({ status: 404 });

    expect(error.message).toEqual(message);
  });

  test('It returns the correct message for 408 errors', () => {
    const message = 'The server took too long to respond to your request. Please, try again.';
    const error = HttpResponse.handle({ status: 408 });

    expect(error.message).toEqual(message);
  });

  test('It returns the correct message for 500 errors', () => {
    const message = 'Apologies, but something went wrong on our end. Please, try again.';
    const error = HttpResponse.handle({ status: 500 });

    expect(error.message).toEqual(message);
  });

  test('It returns the 500 error message for undefined status codes', () => {
    const message = 'Apologies, but something went wrong on our end. Please, try again.';
    const error = HttpResponse.handle({ status: 301 });

    expect(error.message).toEqual(message);
  });
});