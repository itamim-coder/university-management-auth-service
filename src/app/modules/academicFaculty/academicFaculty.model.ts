import { Schema, model } from 'mongoose'

import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import {
  IAcademicFaculty,
  IAcademicFacultyModel,
} from './academicFaculty.interface'

const academicFacultySchema = new Schema<IAcademicFaculty>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)
academicFacultySchema.pre('save', async function (next) {
  const isExist = await AcademicFaculty.findOne({
    title: this.title,
  })
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic faculty is already exist !'
    )
  }
  next()
})

export const AcademicFaculty = model<IAcademicFaculty, IAcademicFacultyModel>(
  'AcademicFaculty',
  academicFacultySchema
)
