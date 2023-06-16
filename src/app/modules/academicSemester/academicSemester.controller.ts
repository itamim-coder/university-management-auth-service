import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import { createdSemesterService } from './academicSemester.service'
import catchAsync from '../../../shared/catchAsync'
import { IAcademicSemester } from './academicSemester.interface'
import sendResponse from '../../../shared/sendResponse'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await createdSemesterService.createAcademicSemester(
      academicSemesterData
    )

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Aademic semester created successfully!',
      data: result,
    })
    next()
  }
)

export const AcademicSemesterController = {
  createSemester,
}
