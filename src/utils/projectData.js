export const projects = [
  {
    id: 'mindlift',
    title: 'MindLift',
    tagline: 'E-Learning Platform',
    description: 'A comprehensive e-learning platform built with React that provides an intuitive learning experience with course management, user authentication, and seamless payment integration.',
    longDescription: 'MindLift is a modern e-learning platform designed to revolutionize online education. Built with a focus on user experience, it offers a clean interface for course discovery, enrollment, and learning. The platform features role-based dashboards, secure authentication flows, and integrated payment processing.',
    features: [
      'User authentication with protected routes',
      'Dynamic course listing and filtering',
      'Enrollment and checkout workflows',
      'Client-side form validation',
      'Responsive dashboard with course progress tracking',
      'REST API integration for real-time data',
    ],
    techStack: ['React.js', 'Tailwind CSS', 'REST APIs', 'Context API', 'React Router', 'Postman'],
    challenges: 'Coordinating with backend team to ensure API consistency and handling complex state management across multiple user flows.',
    role: 'Frontend Lead',
    timeline: '3 months',
    github: null,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
  },
  {
    id: 'vidya-sarthi',
    title: 'Vidya Sarthi',
    tagline: 'Academic Management System',
    description: 'A role-based academic management system streamlining administrative tasks for educational institutions with separate interfaces for Admin, Faculty, and Students.',
    longDescription: 'Vidya Sarthi is an academic management system built to simplify educational administration. With distinct role-based interfaces, it enables administrators to manage faculty and students, faculty to handle coursework and grades, and students to track their academic progress seamlessly.',
    features: [
      'Role-based UI for Admin, Faculty, and Student modules',
      'Protected routes with authentication',
      'Dynamic data tables with filters and sorting',
      'Form management for academic workflows',
      'Real-time data synchronization',
      'Collaborative development with backend team',
    ],
    techStack: ['React.js', 'REST APIs', 'React Hooks', 'Jira', 'Git/GitHub'],
    challenges: 'Implementing complex role-based access control and ensuring smooth API behavior across different user types.',
    role: 'Frontend Developer',
    timeline: '4 months',
    github: null,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  },
  {
    id: 'sql-query-runner',
    title: 'SQL Query Runner',
    tagline: 'Interactive Database Tool',
    description: 'An intuitive web-based SQL query interface that allows users to write, execute, and visualize database queries with syntax highlighting and result formatting.',
    longDescription: 'SQL Query Runner provides a seamless interface for database interaction. Built with modern web technologies, it offers real-time query execution, beautiful result visualization, and developer-friendly features like syntax highlighting.',
    features: [
      'Real-time SQL query execution',
      'Syntax highlighting and autocomplete',
      'Result table visualization',
      'Query history and favorites',
      'Export results to CSV/JSON',
    ],
    techStack: ['React.js', 'Tailwind CSS', 'REST APIs', 'Monaco Editor'],
    challenges: 'Handling large result sets efficiently and implementing a responsive query editor.',
    role: 'Solo Developer',
    timeline: '2 months',
    github: null,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'terra',
    title: 'Terra',
    tagline: 'Environmental Dashboard',
    description: 'A data visualization platform for environmental metrics, providing real-time insights into climate data, sustainability metrics, and ecological trends.',
    longDescription: 'Terra is an environmental data platform that brings climate awareness through beautiful visualizations. It aggregates data from multiple sources to provide actionable insights on environmental trends.',
    features: [
      'Interactive data visualizations',
      'Real-time climate data integration',
      'Custom dashboard creation',
      'Trend analysis and predictions',
      'Export and share reports',
    ],
    techStack: ['React.js', 'D3.js', 'Tailwind CSS', 'REST APIs', 'Chart.js'],
    challenges: 'Creating performant visualizations for large datasets and ensuring responsive design across devices.',
    role: 'Frontend Developer',
    timeline: '3 months',
    github: null,
    image: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&q=80',
  },
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = () => {
  return projects.slice(0, 2); // Return first 2 projects as featured
};