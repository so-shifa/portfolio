export const projects = [
  {
    id: "mindlift",
    title: "MindLift",
    tagline: "E-Learning Platform",

    description:
      "A comprehensive e-learning platform designed to deliver a smooth and engaging learning experience with structured courses, secure authentication, and seamless user flows.",

    longDescription:
      "MindLift is a modern e-learning platform built with a strong focus on usability and visual clarity. The interface prioritizes easy course discovery, intuitive navigation, and distraction-free learning. From onboarding to checkout and course progress tracking, every flow was carefully designed to feel natural and responsive.",

    features: [
      "Role-based dashboards for learners and instructors",
      "Protected routes with secure authentication flows",
      "Dynamic course listing with filters and categories",
      "Enrollment and checkout experience with validation",
      "Responsive layouts optimized for all screen sizes",
      "REST API integration for real-time course data",
    ],

    challenges:
      "Designing a scalable UI system that could support multiple learning flows while keeping the interface simple and approachable for first-time users.",

    role: "Frontend Lead",
    timeline: "3 months",
    github: null,

    figma: {
      preview: "/public/projects/mindlift/mindlift_figma.png",
      link: "https://www.figma.com/design/1vydHx12hayzTd1dIeG43V/Mind-Lift?node-id=0-1&t=u4YnOsc6wmY59zyY-1",
    },

    media: [
      { type: "video", src: "/public/projects/mindlift/MINDLIFT_DEMO_VIDEO.mp4" },
      { type: "image", src: "" },
      { type: "image", src: "/assets/projects/mindlift/signin.png" },
      { type: "image", src: "/assets/projects/mindlift/courses.png" },
    ],

    techStack: [
      "React.js",
      "Tailwind CSS",
      "REST APIs",
      "Context API",
      "React Router",
    ],
  },

  {
    id: "vidya-sarthi",
    title: "Vidya Sarthi",
    tagline: "Academic Management System",

    description:
      "A role-based academic management system designed to simplify institutional workflows through clearly separated interfaces for administrators, faculty, and students.",

    longDescription:
      "Vidya Sarthi is an academic management platform focused on clarity, efficiency, and role-specific usability. Each user type interacts with a tailored interface that reduces complexity and highlights only what matters to them, resulting in a smoother administrative and academic experience.",

    features: [
      "Distinct dashboards for Admin, Faculty, and Students",
      "Role-based access control with protected routes",
      "Dynamic data tables with filtering and sorting",
      "Form-driven academic workflows",
      "Consistent UI patterns across modules",
      "API-driven data synchronization",
    ],

    challenges:
      "Ensuring a consistent design language across multiple role-based interfaces while maintaining performance and usability.",

    role: "Frontend Developer",
    timeline: "4 months",
    github: null,

    figma: {
      preview: "/assets/projects/vidya-sarthi/figma-preview.png",
      link: "https://www.figma.com/file/YYYYYY",
    },

    media: [
      { type: "video", src: "/assets/projects/vidya-sarthi/demo.mp4" },
      {
        type: "image",
        src: "/assets/projects/vidya-sarthi/admin-dashboard.png",
      },
      { type: "image", src: "/assets/projects/vidya-sarthi/student.png" },
    ],

    techStack: ["React.js", "REST APIs", "React Hooks", "Git/GitHub"],
  },

  {
    id: "sql-query-runner",
    title: "SQL Query Runner",
    tagline: "Interactive Database Tool",

    description:
      "A web-based SQL query interface that allows users to write, execute, and visualize database queries in real time.",

    longDescription:
      "SQL Query Runner is a developer-focused tool designed to make database interaction intuitive and efficient. The interface emphasizes readability, fast feedback, and structured result visualization to improve the querying experience.",

    features: [
      "Real-time SQL query execution",
      "Syntax highlighting for improved readability",
      "Structured result table visualization",
      "Query history for quick access",
      "Exportable query results",
    ],

    challenges:
      "Optimizing performance while rendering large result sets and maintaining a responsive editor experience.",

    role: "Solo Developer",
    timeline: "2 months",
    github: null,

    figma: null,

    media: [
      { type: "video", src: "/assets/projects/sql/demo.mp4" },
      { type: "image", src: "/assets/projects/sql/editor.png" },
    ],

    techStack: ["React.js", "Tailwind CSS", "REST APIs", "Monaco Editor"],
  },

  {
    id: "terra",
    title: "Terra",
    tagline: "Environmental Dashboard",

    description:
      "A data visualization dashboard that presents environmental and sustainability metrics through clean, interactive visuals.",

    longDescription:
      "Terra is an environmental data platform designed to communicate complex climate data in a visually accessible way. The dashboard focuses on clarity, contrast, and hierarchy to help users quickly understand trends and insights.",

    features: [
      "Interactive charts and visualizations",
      "Real-time environmental data integration",
      "Customizable dashboard views",
      "Trend analysis and data comparison",
      "Exportable reports and insights",
    ],

    challenges:
      "Designing high-performance visualizations that remain smooth and readable across devices.",

    role: "Frontend Developer",
    timeline: "3 months",
    github: null,

    figma: {
      preview: "/assets/projects/terra/figma-preview.png",
      link: "https://www.figma.com/file/ZZZZZZ",
    },

    media: [
      { type: "video", src: "/assets/projects/terra/demo.mp4" },
      { type: "image", src: "/assets/projects/terra/overview.png" },
      { type: "image", src: "/assets/projects/terra/charts.png" },
    ],

    techStack: ["React.js", "D3.js", "Tailwind CSS", "Chart.js"],
  },
];

export const getProjectById = (id) =>
  projects.find((project) => project.id === id);

export const getFeaturedProjects = () => projects.slice(0, 2);
