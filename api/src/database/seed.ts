import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { connect } from './mongo';
import Course from '../models/Course';

dotenv.config();

const courses = [
  {
    title: 'Introduction to JavaScript',
    description:
      'Learn the basics of JavaScript, including syntax, functions, and DOM manipulation.',
    price: 49.99,
    image: 'public/vite.svg',
  },
  {
    title: 'React for Beginners',
    description:
      'A beginner’s guide to building interactive UIs with React.js and hooks.',
    price: 59.99,
    image: 'public/vite.svg',
  },
  {
    title: 'Mastering TypeScript',
    description:
      'Understand TypeScript’s powerful type system and how to apply it in real-world projects.',
    price: 69.99,
    image: 'public/vite.svg',
  },
  {
    title: 'Python Programming',
    description:
      'An introduction to Python programming, covering data structures, OOP, and libraries.',
    price: 59.99,
    image: 'public/vite.svg',
  },
  {
    title: 'Full-Stack Web Development',
    description:
      'Learn to build full-stack applications using Node.js, Express, and MongoDB.',
    price: 99.99,
    image: 'public/vite.svg',
  },
  {
    title: 'Data Science with Python',
    description:
      'Dive into data analysis and machine learning with Python’s popular data libraries.',
    price: 89.99,
    image: 'public/vite.svg',
  },
  {
    title: 'Algorithms and Data Structures',
    description:
      'Gain a solid foundation in data structures and algorithms for coding interviews.',
    price: 69.99,
    image: 'public/vite.svg',
  },
  {
    title: 'Responsive Web Design',
    description:
      'Learn the fundamentals of responsive web design with HTML, CSS, and JavaScript.',
    price: 49.99,
    image: 'public/vite.svg',
  },
  {
    title: 'Advanced JavaScript Concepts',
    description:
      'Explore advanced JavaScript topics such as closures, async/await, and prototypes.',
    price: 69.99,
    image: 'public/vite.svg',
  },
  {
    title: 'Intro to Machine Learning',
    description:
      'A beginner-friendly course on machine learning concepts and model building.',
    price: 79.99,
    image: 'public/vite.svg',
  },
];

const seedDatabase = async () => {
  try {
    connect();

    const existingProducts = await Course.find();

    if (existingProducts.length === 0) {
      await Course.insertMany(courses);
      console.log('Database seeded with course data.');
    } else {
      console.log('Database already contains course data.');
    }

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding the database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();
