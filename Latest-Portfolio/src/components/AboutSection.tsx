import { useScrollFadeIn } from '../useScrollFadeIn';

const AboutSection = () => {
  const [fadeRef, isVisible] = useScrollFadeIn<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollFadeIn<HTMLDivElement>();
  const [statsRef, statsVisible] = useScrollFadeIn<HTMLDivElement>();
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={fadeRef}
          className={`flex flex-col items-center mb-12 ${isVisible ? 'fade-in-up' : 'fade-init'}`}
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${gridVisible ? 'fade-in-up' : 'fade-init'}`}
        >
          <div className="space-y-6 px-4 md:px-6">
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm Amaresh Koneti, a final-year AIML student with hands-on experience in developing real-world AI&Ml solutions using Python, SQL, and machine learning. I'm a 5-time National Hackathon winner, with a strong focus on building intelligent systems that address real-world challenges through innovation and automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have authored multiple IEEE research papers  in the fields of deep learning, intelligent automation, and IoT-based systems. My research focuses on practical applications such as automated assessment of handwritten answers using NLP, and innovative CNN-based solutions.
            </p>

            {/* Download Resume Button */}
            <a
              href="\Amaresh_resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>

            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-3">My Interests</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'AI & Machine Learning',
                  'Data Science',
                  'Data Analytics',
                  'Full-Stack Development',
                  'Hackathons & Prototyping',
                  'Research & Publications',
                  'Technical Workshops',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="bg-background border border-border shadow-xl rounded-xl p-1 mx-auto" style={{ width: '320px', height: '400px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="myphoto.jpg"
                alt="Amaresh Koneti"
                className="w-full h-full object-cover object-center"
                style={{ width: '100%', height: '100%', borderRadius: '1rem', display: 'block' }}
              />
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${statsVisible ? 'fade-in-up' : 'fade-init'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f8fafc] border border-[#e0e7ff] rounded-2xl p-8 shadow-lg flex flex-col items-start text-left">
            <div className="w-12 h-12 bg-[#38bdf8]/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#2563eb' }}>Experience</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li className="text-black font-bold"><span className="font-semibold text-[#22223b]">AIML Intern at HCL Technologie</span></li>
              <li className="text-black font-bold"><span className="font-semibold text-[#22223b]">AIML Intern at Flipnow Solutions Pvt limited</span></li>
              <li className="text-black font-bold"><span className="font-semibold text-[#22223b]">IEEE Paper Author</span></li>
              
            </ol>
          </div>

          <div className="bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f8fafc] border border-[#e0e7ff] rounded-2xl p-8 shadow-lg flex flex-col items-start text-left">
            <div className="w-12 h-12 bg-[#38bdf8]/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253M12 6.253C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#2563eb' }}>Education</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li className="text-black font-bold"><span className="font-semibold text-[#22223b]">B.Tech in AI & ML, Prasad V Potluri Siddardha Institute of Technology</span></li>
              <li className="text-black font-bold"><span className="font-semibold text-[#22223b]">Intermediate in KBN College</span></li>
            </ol>
          </div>

          <div className="bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f8fafc] border border-[#e0e7ff] rounded-2xl p-8 shadow-lg flex flex-col items-start text-left">
            <div className="w-12 h-12 bg-[#38bdf8]/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#2563eb' }}>Languages</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li className="text-black font-bold"><span className="font-semibold text-[#22223b]">English</span></li>
              <li className="text-black font-bold"><span className="font-semibold text-[#22223b]">Telugu</span></li>
              <li className="text-black font-bold"><span className="font-semibold text-[#22223b]">Hindi</span></li>
            </ol>
          </div>

          <div className="bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f8fafc] border border-[#e0e7ff] rounded-2xl p-8 shadow-lg flex flex-col items-start text-left">
            <div className="w-12 h-12 bg-[#38bdf8]/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#2563eb' }}>Achievements</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li className="text-black font-bold"><span className="font-semibold text-[#22223b]">5x National Hackathon Winner</span></li>
              <li className="text-black font-bold"><span className="font-semibold text-[#22223b]">Patent & IEEE Paper Contributor</span></li>
              <li className="text-black font-bold"><span className="font-semibold text-[#22223b]">Received Merit-Based Scholarship</span></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

