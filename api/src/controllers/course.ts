import { Request, Response } from 'express';

import CourseModel from '../models/Course';

export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await CourseModel.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', err });
  }
};

export const getCourse = async (req: Request, res: Response) => {
  try {
    const course = await CourseModel.findById(req.params.id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product', err });
  }
};
