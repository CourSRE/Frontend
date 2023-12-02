import React from 'react';

// Define the type for a course
interface Course {
  id: number;
  name: string;
  difficulty: string;
  availability: boolean;
}

const Courses: React.FC = () => {
  const coursesData: Course[] = [
    {
      id: 1,
      name: 'Course 1',
      difficulty: 'Intermediate',
      availability: true,
    },
    {
      id: 2,
      name: 'Course 2',
      difficulty: 'Beginner',
      availability: false,
    },
    // Add more course data as needed
  ];

  return (
    <main>
      <h1>Courses List Page</h1>
      {coursesData.map((course) => (
        <section
          key={course.id}
          className={`flex p-4 mb-10 ${
            course.availability ? 'bg-green-400' : 'bg-red-400'
          } text-black`}
        >
          <img
            src={`https://placekitten.com/200/300?image=${course.id}`}
            alt={course.name}
            className="mr-4"
          />
          <div>
            <h2>{course.name}</h2>
            <p>Difficulty: {course.difficulty}</p>
            <p>Availability: {course.availability ? 'Available' : 'Not Available'}</p>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Courses;
