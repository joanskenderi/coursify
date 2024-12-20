import mongoose, { Schema, Document } from 'mongoose';

interface Course extends Document {
  title: string;
  description: string;
  price: number;
  image: string;
}

const courseSchema = new Schema<Course>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const CourseModel = mongoose.model<Course>('Course', courseSchema);

export default CourseModel;
