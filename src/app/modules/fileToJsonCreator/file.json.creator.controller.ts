import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { fileToJsonCreatorService } from './file.json.creator.service';
import { IContent } from '../../../interfaces/common';

const fileToJsonCreator = catchAsync(async (req, res) => {
  const { modules } = req.query;
  console.log(modules);

  const result = await fileToJsonCreatorService.fileToJsonCreator();
  sendResponse<IContent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Json created successfully!',
    data: result,
  });
});
export const fileToJsonCreatorController = {
  fileToJsonCreator,
};
