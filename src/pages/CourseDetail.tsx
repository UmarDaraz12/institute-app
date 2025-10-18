// src/pages/CourseDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// src/data/coursesData.js (you can move this into a separate file if you want)
const coursesData = [
  {
    id: "csX3f2a7Lp",
    title: "O Level / IGCSE Computer Science",
    shortDescription:
      "Strong foundation in algorithms, hardware, and programming basics.",
    details: [
      {
        heading: "1. Theory of Computer Science",
        topics: [
          "Data Representation (binary, ASCII, Unicode)",
          "Hardware (CPU, Memory, Peripherals)",
          "Software (OS, Applications, Development Stages)",
          "Communication & Internet (Networks, Protocols, Security)",
        ],
      },
      {
        heading: "2. Problem Solving and Programming",
        topics: [
          "Algorithms using Flowcharts & Pseudocode",
          "Programming Concepts (Variables, Loops, Conditions)",
          "Arrays, Functions, String Manipulation",
          "Testing and Debugging",
        ],
      },
      {
        heading: "3. Databases & Computer Systems",
        topics: [
          "SQL Basics (SELECT, INSERT, JOIN)",
          "Ethical & Legal Issues in Computing",
        ],
      },
    ],
  },
  {
    id: "a9PqL7vE1z",
    title: "AS Level Computer Science (9618)",
    description:
      "The Cambridge International AS Level Computer Science (9618) is a rigorous course designed for students to develop a deep understanding of the fundamental concepts of computing, programming, and system design. This course builds on the knowledge typically acquired at the IGCSE level (or equivalent) and introduces more advanced topics.",
    outline: [
      {
        title: "Theory (Paper 1)",
        sections: [
          {
            heading: "1. Fundamentals of Computing",
            topics: [
              "Data Representation: Number systems (binary, hexadecimal, decimal), ASCII, Unicode, images, sound, and compression methods.",
              "Computer Systems: CPU architecture, fetch-execute cycle, storage devices, and embedded systems.",
              "Software: System software, operating systems, and the software development lifecycle.",
            ],
          },
          {
            heading: "2. Hardware and Software Interaction",
            topics: [
              "Instruction Set Architecture (ISA): How CPUs interpret and execute instructions.",
              "Assembly Language: Basics of low-level programming.",
            ],
          },
          {
            heading: "3. Data Structures and Algorithms",
            topics: [
              "Algorithms: Flowcharts, pseudocode, searching and sorting algorithms, complexity (Big O).",
              "Data Structures: Arrays, linked lists, stacks, queues, trees, graphs.",
            ],
          },
          {
            heading: "4. Computer Networks",
            topics: [
              "Network Types (LAN, WAN, MAN, PAN), IP addressing, TCP/IP, HTTP, DNS.",
              "Network Security: Encryption, firewalls, DDoS, malware.",
              "Cloud Computing and Wireless Communication.",
            ],
          },
          {
            heading: "5. Databases",
            topics: [
              "Relational databases, SQL (SELECT, INSERT, UPDATE, DELETE).",
              "Normalization (1NF, 2NF, 3NF) and database design (ER diagrams).",
            ],
          },
          {
            heading: "6. Social, Legal, and Ethical Issues",
            topics: [
              "Ethics: Privacy, intellectual property, data protection.",
              "Legal Issues: Cybercrime, software piracy.",
              "Environmental Impact: E-waste, sustainability.",
            ],
          },
        ],
      },
      {
        title: "Practical (Paper 2)",
        sections: [
          {
            heading: "1. Programming",
            topics: [
              "Programming in Python, Java, or C++.",
              "Control structures, arrays, recursion, file handling, and exception handling.",
            ],
          },
          {
            heading: "2. Software Development Process",
            topics: [
              "Design, implementation, testing, and documentation of solutions.",
            ],
          },
          {
            heading: "3. Practical Assessment",
            topics: [
              "Problem-solving under exam conditions using data structures and algorithms.",
            ],
          },
        ],
      },
    ],
    assessment: [
      {
        paper: "Paper 1: Theory (1 hour 30 minutes)",
        weight: "50%",
        description:
          "Covers theoretical concepts such as data representation, algorithms, and networks.",
      },
      {
        paper: "Paper 2: Practical Programming (2 hours)",
        weight: "50%",
        description:
          "Tests ability to program, solve problems, and design algorithms efficiently.",
      },
    ],
  },
  {
    id: "M7rQw2TzX8",
    title: "A Level Computer Science (9618)",
    shortDescription:
      "Advanced computing, data structures, and algorithmic problem solving.",
    details: [
      {
        heading: "1. Advanced Computer Architecture",
        topics: [
          "CPU Design, Registers, and Cache",
          "Assembly Language & Instruction Sets",
          "Parallel and Pipeline Processing",
        ],
      },
      {
        heading: "2. Algorithms & Data Structures",
        topics: [
          "Graphs, Trees, Hash Tables",
          "Greedy and Dynamic Programming",
          "Big O Time Complexity",
        ],
      },
      {
        heading: "3. Software Development & OOP",
        topics: [
          "Classes, Inheritance, Polymorphism",
          "Design Patterns (Factory, Observer)",
          "Testing and Debugging (Unit & Integration)",
        ],
      },
    ],
  },
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);
  const navigate = useNavigate();
  const onEnRoll = (id: string) => {
    navigate(`/contact-us?${id}`);
  };
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">Course Not Found 😢</h1>
        <Link to="/courses" className="mt-5 text-blue-600 underline">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fbff] to-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-accent">{course.title}</span>
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          {course.shortDescription || course.description}
        </p>

        {/* For O-Level & A-Level */}
        {course.details && (
          <div className="space-y-8">
            {course.details.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-accent"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {section.heading}
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {section.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* For AS-Level */}
        {course.outline && (
          <div className="space-y-8">
            {course.outline.map((section, index) => (
              <div key={index}>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  {section.title}
                </h2>
                {section.sections.map((sub, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-accent mb-5"
                  >
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      {sub.heading}
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      {sub.topics.map((topic, tIndex) => (
                        <li key={tIndex}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* AS-Level Assessment Section */}
        {course.assessment && (
          <div className="mt-10 bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-400">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Assessment Overview
            </h2>
            <ul className="space-y-3">
              {course.assessment.map((a, i) => (
                <li key={i}>
                  <p className="font-medium">{a.paper}</p>
                  <p className="text-gray-700">{a.description}</p>
                  <p className="text-sm text-gray-500">Weight: {a.weight}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-12 flex gap-4">
          <Link
            to="/courses"
            className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl transition"
          >
            Back to Courses
          </Link>
          <button
            onClick={() => onEnRoll(course?.id)}
            className="border border-accent text-accent px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
