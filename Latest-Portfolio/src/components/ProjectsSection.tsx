import { useState, useEffect } from 'react';
import { useScrollFadeIn } from '../useScrollFadeIn';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}



const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [fadeRef, isVisible] = useScrollFadeIn<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollFadeIn<HTMLDivElement>();

  const projects: Project[] = [

    {
      id: 1,
      title: 'AI-Powered Resume Evaluator for Recruiter Insights',
      description: 'An intelligent resume screening system that extracts key skills, classifies job roles, and performs behavioral and technical analysis to provide recruiters with actionable insights for effective candidate shortlisting.',    
      image: 'image.png',
      tags: ['ML', 'NLP', 'Python', 'MongoDB','React','Node.js'],
      demoLink: 'https://drive.google.com/file/d/1KgK1esvsP9oUEa6R6Fk8DUiP50HKUN2F/view?usp=sharing',
      codeLink: 'https://github.com/Sailajayadav/AI-Resume-Evaluator.git',
    },
    {
      id: 2,
      title: 'Automated Handwritten Answer Sheet Evaluation System',
      description: 'A smart evaluation system that uses Gemini Vision API to extract handwritten answers and applies SBERT and Cross-Encoder models to assess semantic similarity against model answers, enabling AI-assisted grading.',
      image: 'autograder.jpg',
      tags: ['React', 'MongoDB', 'Node.js', 'NLP','Python','Sentence-BERT','Cross-Encoder'],
      demoLink: 'https://drive.google.com/file/d/1QVx2ZNdcmfyFQ5KD6kOAAci43CFZ1lNy/view?usp=sharing',
      codeLink: 'https://github.com/Sailajayadav/Automatic-Correction-of-Answersheets',
    },
    {
      id: 3,
      title: 'Coding Institute Management System',
      description: 'A freelance full-stack MERN project enabling secure login, course management, and certificate verification via public URLs, ensuring seamless administration and authenticity of student achievements.',
      image: 'coding-institute.png',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Supabase', 'Particle.js'],
      demoLink: 'https://sky-coding-institute.vercel.app',
      codeLink: 'https://github.com/amareshkoneti/sky-coding-institute.git',
    },

    {
      id: 4,
      title: 'Learnova – AI-Powered Interactive Learning Platform',
      description: 'An intelligent learning platform with topic roadmaps, quiz-based subtopic unlocking, and an AI chatbot for real-time doubt clarification, enhancing personalized and engaging learning experiences.',
      image: 'learnova.png',
      tags: ['Flask', 'React.js', 'MongoDB', 'Gemini API', 'IBM Granite', 'AI'],
      demoLink: '',
      codeLink: 'https://github.com/amareshkoneti/Learnova.git',
    },

    {
      id: 4,
      title: 'Water Level Monitoring System',
      description: 'This project presents an intelligent real-time water level monitoring system that leverages piezometer sensor data for accurate measurement of subsurface and groundwater levels. The system continuously collects and transmits readings to a cloud-based platform, enabling authorities to remotely monitor water fluctuations in reservoirs, canals, and aquifers. This assists in flood risk assessment, irrigation planning, and groundwater management.',
      image: 'DWLR.png',
      tags: ['Python', 'IoT', 'ML', 'Data Visualization', 'Real-Time Monitoring', 'Alert System','twilio'],
      demoLink: 'https://demo.com/waterlevel',
      codeLink: 'https://github.com/Sailajayadav/AutomatedDataMonitoring-and-AlertSystem-for-DWLRs.git',
    },
    
    {
      id: 5,
      title: 'InjuryShield',
      description: 'An AI-based application to classify the severity of injuries using image processing.This project introduces an AI-powered application that leverages image processing and deep learning techniques to automatically classify the severity of injuries from medical or accident images. The system processes input images of wounds or injuries, extracts critical visual features such as color, texture, shape, and depth indicators, and applies convolutional neural networks (CNNs) for severity assessment.',
      image: 'injuryshield.png',
      tags: ['AI', 'Computer Vision', 'Healthcare','Python','CNN','Tensorflow','OpenCV','Flask','Docker'],
      demoLink: 'https://soft-marigold-2f9026.netlify.app/',
      codeLink: 'https://github.com/Sailajayadav/Athlete-injury-prediction-.git',
    },
    {
      id: 6,
      title: 'Virtual Art Gallery',
      description: 'A 3D web-based art gallery experience for showcasing digital artworks.This project presents an immersive 3D web-based virtual art gallery designed to showcase and explore digital artworks in an interactive environment. Built with modern web technologies (WebGL, Three.js, React, and Flask backend), the platform allows users to navigate through a realistic 3D gallery space that simulates a physical exhibition experience',
      image: 'artgallery.png',
      tags: ['Three.js', 'React', '3D', 'WebGL', 'Flask', 'Python'],
      demoLink: 'https://virtual-art-gallery-wsth.onrender.com/second',
      codeLink: 'https://github.com/Sailajayadav/art-gallery.git',

    },
    {
      id: 7,
      title: 'Osteophorosis-predicto',
      description: 'Osteoporosis Predictor A machine learning-based tool for predicting osteoporosis risk. It analyzes health data to identify patterns and support early detection. This project aims to aid in better healthcare decisions with data-driven insights.',    
      image: 'proj_2.jpg',
      tags: ['ML', 'NLP', 'Python','CNN'],
      demoLink: 'https://demo.com/instaspam',
      codeLink: 'https://github.com/Sailajayadav/Osteophorosis-predictor.git',
    },

    {
      id: 8,
      title: 'Youtube Sentiment Analysis',
      description: 'A project that analyzes YouTube comments using NLP to classify sentiments and provide insights into audience feedback.',
      image: 'proj_3.jpg',
      tags: ['YouTube API', 'Natural Language Processing (NLP)', 'Python', 'Data Visualization','Real-Time Analytics', 'Sentiment Analysis'],
      demoLink: '',
      codeLink: 'https://github.com/Sailajayadav/Yiutube-Sentimental-Analysis.git',
    },
    {
      id:9,
      title: 'Advertisement Sales Prediction from an existing Customer using Logistic Regression',
      description: 'A project that predicts advertisement sales from existing customers using Logistic Regression to classify potential sales outcomes and support targeted marketing strategies.',
      image: 'proj_4.jpg',
      tags: ['Python', 'ML', 'Logistic Regression', 'Data Analysis', 'Predictive Modeling', 'Customer Analytics', 'Sales Forecasting'],
      demoLink: '',
      codeLink: 'https://github.com/Sailajayadav/Logistic-Regression-an-ML-project.git'
    },

    {
      id: 10,
      title: 'Interactive-Chatbot-Powered-by-Dialogflow',
      description: 'Dialogflow Chatbot An AI-powered chatbot built using Dialogflow for intelligent and interactive conversations.',
      image: 'proj_5.jpg',
      tags: ['Python', 'ML', 'NLP', 'Dialogflow', 'Chatbot', 'Interactive', 'AI'],
      demoLink: '',
      codeLink: 'https://github.com/Sailajayadav/Interactive-Chatbot-Powered-by-Dialogflow.git',
    },




  ];

  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(selectedCategory))
      );
    }
  }, [selectedCategory]);

  return (
  <section id="projects" className="relative py-20 min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#18181b]">
  <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div ref={fadeRef} className={`flex flex-col items-center mb-12 ${isVisible ? 'fade-in-up' : 'fade-init'}`}> 
          <h2 className="text-4xl font-extrabold mb-2" style={{ color: '#2563eb' }}>My Projects</h2>
          <div className="w-24 h-1 bg-[#2563eb] rounded-full"></div>
          <p className="mt-6 text-center max-w-2xl text-white text-lg">
            Explore a selection of my work, spanning AI, web, and data projects. Each card is interactive—hover for details and quick access to code or live demos.
          </p>
        </div>

  <div className="flex flex-wrap justify-center gap-3 mb-10 relative z-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2 rounded-full text-sm font-semibold shadow transition-all duration-150 ${selectedCategory === 'all' ? 'bg-[#2563eb] text-white scale-105' : 'bg-[#23272f] text-white hover:bg-[#2563eb]/20 hover:text-[#2563eb]'}`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedCategory(tag)}
              className={`px-5 py-2 rounded-full text-sm font-semibold shadow transition-all duration-150 ${selectedCategory === tag ? 'bg-[#2563eb] text-white scale-105' : 'bg-[#23272f] text-white hover:bg-[#2563eb]/20 hover:text-[#2563eb]'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ${gridVisible ? 'fade-in-up' : 'fade-init'}`}>
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-[#23272f] via-[#18181b] to-[#23272f] border border-[#23272f] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-[#2563eb] flex flex-col"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2563eb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 text-[#2563eb] drop-shadow-lg">{project.title}</h3>
                <p className="mb-4 text-gray-200 text-sm flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-xs shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-[#2563eb] text-white rounded-md text-center text-sm font-semibold shadow hover:scale-105 transition-transform duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-[#23272f] text-[#2563eb] rounded-md text-center text-sm font-semibold shadow hover:bg-[#2563eb]/20 hover:text-white hover:scale-105 transition-transform duration-200"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center mt-10 p-8 bg-gradient-to-br from-[#23272f] via-[#18181b] to-[#23272f] border border-[#23272f] rounded-2xl text-[#2563eb] shadow">
            <p className="text-lg">
              No projects found in this category. Please select another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
