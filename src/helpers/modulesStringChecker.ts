import httpStatus from 'http-status';
import ApiError from '../errors/ApiError';

const modulesStringChecker = (modules: string[]) => {
  const foundWrongString = modules.find(str => {
    return str === '' || str[0].match(/\d/) || str[0].match(/[A-Z]/);
  });
  console.log({ foundWrongString });

  if (foundWrongString || foundWrongString === '') {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'wrong type modules name detected'
    );
  }
};
export default modulesStringChecker;
