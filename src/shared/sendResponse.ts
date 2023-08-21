import { Response } from 'express';
import fs from 'fs';
type IApiReponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null;
};

const sendResponse = (res: Response, data: any): void => {
  console.log(data);
  // Set headers to trigger the download
  res.setHeader('Content-Disposition', `attachment; filename="dad.zip"`);
  res.setHeader('Content-Type', 'application/octet-stream');

  // Create a readable stream of the folder and pipe it to the response
  const folderStream = fs.createReadStream(data.folderPath);
  folderStream.pipe(res);
  // res.status(data.statusCode).json(responseData);
};

export default sendResponse;
