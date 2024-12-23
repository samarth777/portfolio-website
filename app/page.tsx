import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { projects } from "@/data/projects"
import { publications } from "@/data/publications"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <MainNav />
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
              Samarth P
            </h1>
            <p className="text-xl text-gray-400">
              AI Engineer & Full Stack Developer
            </p>
            <div className="flex gap-4">
              <Link
                href="mailto:samarthprakash8@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/samarth777"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/samarth-prakash"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
            <Avatar className="w-48 h-48 border-4 border-cyan-400/20">
              <img src="image.png" alt="Samarth P" className="w-full h-full object-cover" />
            </Avatar>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* About Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400">About</h2>
          <p className="text-gray-400 max-w-3xl">
            Computer Science student at PES University with a strong focus on AI.
            Experienced in building GenAI solutions, implementing RAG and Agentic systems, and working with cutting-edge AI technologies.
          </p>
        </section>

        {/* Education Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-400">Education</h2>
          <Card className="p-6 bg-gray-900/50 border-gray-800">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">PES University, EC Campus</h3>
              <p className="text-gray-400">Bengaluru, India</p>
              <p>B.Tech, Computer Science and Engineering</p>
              <p>CGPA: 8.49</p>
              <Badge className="bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20">
                2022 – Present
              </Badge>
            </div>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-400">Experience</h2>
          <div className="grid gap-6">
            {[
              {
                title: "AI Intern",
                company: "CognitiveLab",
                location: "Remote",
                date: "August 2024 – Present",
                description: "Building full stack GenAI solutions. Mainly working on OmniParse, a platform that ingests and parses unstructured data into structured, actionable data optimized for GenAI (LLM) applications. Implementing new features using Agentic AI."
              },
              {
                title: "Summer Intern",
                company: "IIIT Bangalore",
                location: "Bengaluru, India",
                date: "June 2024 – August 2024",
                description: "Worked on the IndicNLP project under Prof. Srinath Srinivasa. Implemented a pipeline to easily search information from a corpus in colloquial Indic languages. Developed a RAG-based AI system for multi-modal question answering in Kannada and created a full stack web application in Next.js and FastAPI."
              },
              {
                title: "Project Intern",
                company: "Bosch University Connect Program",
                location: "Bengaluru, India",
                date: "March 2024 – Present",
                description: "Developed a GenAI platform for Bosch to assist Technicians with Troubleshoot Assistance. Implemented RAG (Retrieval-Augmented Generation) and Agentic AI system to input vehicle issues and receive step-by-step troubleshooting guidance. Used LlamaIndex to create the AI pipeline and Next.js and FastAPI for the interface."
              },
              {
                title: "Subject Matter Expert",
                company: "PESU IO",
                location: "Bengaluru, India",
                date: "October 2024 – November 2024",
                description: "Teaching a course RAGs to Rich AIs: Build Smart LLMs and Agents. Providing hands-on projects and implementation-based learning on the fundamentals to advanced concepts of RAG and Agentic AI."
              }
            ].map((job, index) => (
              <Card key={index} className="p-6 bg-gray-900/50 border-gray-800">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-gray-400">{job.company}</p>
                      <p className="text-gray-500">{job.location}</p>
                    </div>
                    <Badge className="bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20">
                      {job.date}
                    </Badge>
                  </div>
                  <p className="text-gray-400">{job.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-400">Technical Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "C++", "Java", "JavaScript", "Dart", "SQL", "R", "Go", "HTML", "CSS"].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator className="bg-gray-800" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Frameworks & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "LlamaIndex", "LangChain", "CrewAI", "FastAPI", "Qiskit", "PyTorch", "NumPy", "pandas",
                  "React", "Next.js", "Node.js", "Google Cloud", "Amazon Web Services", "Vercel", "Flutter", "MongoDB",
                  "Firebase", "Flask", "Django", "Hadoop", "Kafka", "Spark", "Docker"
                ].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator className="bg-gray-800" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Generative AI", "Machine Learning", "LLMs", "RAG", "Agentic AI Systems", "IoT", "Computer Vision",
                  "Backend Development", "Full Stack Development", "Embedded Systems", "Quantum Computing", "REST APIs"
                ].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-400">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-cyan-400 hover:underline">
                    View Project
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </section>

        {/* Publications Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-400">Publications</h2>
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle>{publication.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-2">{publication.authors}</p>
                  <p className="text-gray-400 mb-4">{publication.conference}</p>
                  <p className="text-gray-300 mb-4">{publication.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/publications">View All Publications</Link>
            </Button>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-400">Achievements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Hardware Winner (AMD Kria KR260 FPGA): AMD Pervasive AI Hackathon - Robotics AI Category</li>
            <li>Completed: Qiskit Quantum Challenge Spring 2023, IBM Quantum Challenge 2024</li>
            <li>1st Place: Arithemania&apos;22 RAS Track (36-hr hackathon by Shunya Math Club + IEEE PESU)</li>
            <li>1st Place: Unimate&apos;22 (24-hr hackathon by IEEE RAS PESU ECC)</li>
            <li>Winner: Override&apos;22 - Best Overall App (48-hr hackathon by GDSC – PESU ECC)</li>
          </ul>
        </section>

        {/* Leadership & Extracurricular Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-400">Leadership & Extracurricular</h2>
          <div className="space-y-4">
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h3 className="text-xl font-semibold">Club Co-Head: Quantumania PESU ECC</h3>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Organizing an extensible event in collaboration with IBM Quantum and Qiskit, for which only 50 universities were selected globally.</li>
                <li>Conducted &quot;Beyond Bits&quot; workshop to introduce students to the fundamentals of Quantum Computing.</li>
                <li>Did a lab tour of the Quantum and Nano Devices Laboratory (QuaNaD).</li>
                <li>Built the official website for the QuaNaD Lab.</li>
              </ul>
            </Card>
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h3 className="text-xl font-semibold">Technical Team: Codechef PESU ECC</h3>
              <p className="mt-2 text-gray-300">Conducted workshops on C++ STL library for junior students</p>
            </Card>
            <Card className="p-6 bg-gray-900/50 border-gray-800">
              <h3 className="text-xl font-semibold">Technical Team: Equinox PESU ECC & IEEE RAS PESU ECC</h3>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

