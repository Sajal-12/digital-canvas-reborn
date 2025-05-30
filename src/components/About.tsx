
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">
              Passionate Full Stack Developer
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated software developer with expertise in modern web technologies. 
              I love creating innovative solutions that solve real-world problems and 
              deliver exceptional user experiences.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With a strong foundation in both frontend and backend development, 
              I enjoy working on challenging projects that push the boundaries of 
              what's possible on the web.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                  <div className="text-gray-300">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-purple-400">Bachelor's in Computer Science</h5>
                  <p className="text-gray-300">University Name • 2020-2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-4">Experience</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-purple-400">Full Stack Developer</h5>
                  <p className="text-gray-300">Tech Company • 2023-Present</p>
                </div>
                <div>
                  <h5 className="font-medium text-purple-400">Frontend Developer Intern</h5>
                  <p className="text-gray-300">Startup Inc • 2022-2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
