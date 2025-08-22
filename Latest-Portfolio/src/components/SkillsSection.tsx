import { useState, useEffect, useRef } from 'react';
import { useScrollFadeIn } from '../useScrollFadeIn';

function useCountUp(target: number, startAnimation: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  const animationRef = useRef<number | null>(null);
  const [hasRunAnimation, setHasRunAnimation] = useState(false); // New state to track if animation has ever run

  useEffect(() => {
    // If we should start the animation and it hasn't run yet
    if (startAnimation && !hasRunAnimation) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setValue(Math.floor(progress * target));
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(step);
        } else {
          setValue(target); // Ensure it ends exactly at target
          setHasRunAnimation(true); // Mark animation as completed
        }
      };
      animationRef.current = requestAnimationFrame(step);
    } else if (hasRunAnimation) {
      // If animation has already run, just ensure value is the target
      setValue(target);
    } else {
      // If animation hasn't run and shouldn't start, keep at initial 0
      setValue(0);
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target, startAnimation, duration, hasRunAnimation]); // Add hasRunAnimation to dependencies

  return value;
}

const SkillsSection = () => {
  const [animatedPercentages, setAnimatedPercentages] = useState<{ [key: string]: number }>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const [fadeRef, isVisible] = useScrollFadeIn<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollFadeIn<HTMLDivElement>();

  const frontendSkills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 88 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'Power BI', percentage: 87 },
    { name: 'Tableau', percentage: 80 },
  ];

  const backendSkills = [
    { name: 'Python', percentage: 95 },
    { name: 'SQL', percentage: 90 },
    { name: 'Flask', percentage: 92 },
    { name: 'MongoDB', percentage: 85 },
    { name: 'PostgreSQL', percentage: 80 },
  ];

  const aimlSkills = [
    { name: 'Machine Learning', percentage: 92 },
    { name: 'Deep Learning', percentage: 88 },
    { name: 'Computer Vision', percentage: 85 },
    { name: 'NLP', percentage: 86 },
    { name: 'LLMs & Transformers', percentage: 83 },
    { name: 'Data Visualization', percentage: 87 },
  ];

  const otherSkills = [
    'Git & GitHub',
    'Jupyter Notebook & Google Colab',
    'VS Code & PyCharm',
    'Prompt Engineering',
    'Cloud Integration',
    'Agile Methodology',
    'API Integration',
    'Data Visualization',
    'DBeaver',
    'Hugging Face',
    'TimescaleDB',
    'Google Cloud Basics',
    'Real-Time Alert Systems',
    'Project Documentation',
    'Technical Presentation',
  ];

  // Animate bars smoothly when grid is visible
  useEffect(() => {
    if (gridVisible && !hasAnimated) {
      const allSkills = [...frontendSkills, ...backendSkills, ...aimlSkills];
      allSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedPercentages(prev => ({
            ...prev,
            [skill.name]: skill.percentage,
          }));
        }, index * 120); // Slightly faster, smoother cascade
      });
      setHasAnimated(true);
    }
    // Do not reset animatedPercentages after first animation, so bars stay filled
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridVisible, hasAnimated]);

  interface Skill {
    name: string;
    percentage: number;
  }

  interface SkillCardProps {
    skills: Skill[];
    title: string;
    icon: React.ReactNode;
    delay?: number;
  }

  const SkillCard = ({ skills, title, icon, delay = 0 }: SkillCardProps) => (
    <div
      className={`bg-background border border-border rounded-xl p-6 shadow-md transition-all duration-700 ease-in-out transform hover:scale-[1.03] hover:shadow-xl ${
        gridVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center">
        <div className="w-6 h-6 mr-2 text-primary animate-pulse">{icon}</div>
        {title}
      </h3>
      <div className="space-y-6">
        {skills.map((skill, index) => {
          // Only animate count up the first time the section is visible AND hasAnimated is true
          const count = useCountUp(skill.percentage, hasAnimated);
          return (
            <div
              key={skill.name}
              className={`space-y-2 transform transition-all duration-500 ${
                gridVisible ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
              }`}
              style={{ transitionDelay: `${delay + index * 120}ms` }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-base hover:text-primary transition-colors duration-200">
                  {skill.name}
                </span>
                <span className="text-muted-foreground font-mono text-sm">
                  {count}%
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-primary rounded-full bar-animate"
                  style={{ width: `${animatedPercentages[skill.name] || 0}%`, transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={fadeRef}
          className={`flex flex-col items-center mb-12 text-center ${isVisible ? 'fade-in-up' : 'fade-init'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 hover:scale-105 transition-transform duration-300">
            My Skills
          </h2>
          <div
            className={`h-1 bg-primary rounded transition-all duration-1000 ${
              isVisible ? 'w-20' : 'w-0'
            }`}
          ></div>
          <p className="mt-6 text-sm sm:text-base max-w-2xl text-muted-foreground">
            I’ve worked with a wide range of technologies across AI/ML, backend systems, and data visualization.
            Here are some of my technical skills and areas of expertise.
          </p>
        </div>
        {/* Grid Layout */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${gridVisible ? 'fade-in-up' : 'fade-init'}`}
        >
          {[frontendSkills, backendSkills, aimlSkills].map((skills, idx) => (
            <SkillCard
              key={idx}
              skills={skills}
              title={['Frontend', 'Backend', 'AI / ML'][idx]}
              icon={[<FrontendIcon />, <BackendIcon />, <AiMlIcon />][idx]}
              delay={200 + idx * 200}
            />
          ))}
        </div>
        {/* Other Skills */}
        <div
          className="mt-12 bg-background border border-border rounded-lg p-6 shadow-sm"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <div className="w-6 h-6 mr-2 text-primary animate-pulse">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            Other Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full text-sm hover:scale-105 hover:bg-primary/20 hover:text-primary cursor-pointer transition-all duration-500 animate-float"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating background dots */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-1.5 h-1.5 bg-primary/25 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

// SVG Icons
const FrontendIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const BackendIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const AiMlIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4M3 13h2l3 8 4-16 3 8h5" />
  </svg>
);

export default SkillsSection;
