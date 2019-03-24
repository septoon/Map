const errorType = new Map([[204, 'No Content'], [302, 'Found'], [305, 'Use Proxy'], [403, 'Forbidden'], [404, 'Not Found']]);

class ErrorRepository {
  static error(errorNum) {
    if (errorType.has(errorNum)) {
      return errorType.get(errorNum);
    }
    return 'Unknown error';
  }
}

export default ErrorRepository;
