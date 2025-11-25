import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export const revalidate = 60;
export default async function SkillsPage() {
  const uniqueSkills = new Set();
  const skills = [
    {
      title: "Virtualisation",
      description: "Experience with virtual machines and containerization technologies.",
    },
    { title: "AWS", description: "Proficient in Amazon Web Services (AWS) cloud platform." },
    { title: "GCP", description: "Experience with Google Cloud Platform (GCP)." },
    { title: "Azure", description: "Familiar with Microsoft Azure cloud services." },
    {
      title: "Hypervisors",
      description: "Working knowledge of various hypervisors like KVM and QEMU.",
    },
    { title: "KVM", description: "Kernel-based Virtual Machine." },
    { title: "QEMU", description: "Quick EMUlator." },
    {
      title: "Terraform",
      description: "Infrastructure as Code (IaC) with Terraform.",
    },
    {
      title: "Kubernetes",
      description: "Container orchestration with Kubernetes.",
    },
    { title: "Helm", description: "Kubernetes package manager." },
    { title: "Flux", description: "GitOps continuous delivery for Kubernetes." },
    {
      title: "Microservices",
      description: "Designing and implementing microservices architectures.",
    },
    { title: "SIEM", description: "Security Information and Event Management." },
    { title: "SOAR", description: "Security Orchestration, Automation, and Response." },
    {
      title: "CNAPP",
      description: "Cloud-Native Application Protection Platform.",
    },
    { title: "EDR", description: "Endpoint Detection and Response." },
    { title: "Golang", description: "Proficient in Go programming language." },
    { title: "Jenkins", description: "Continuous Integration/Continuous Delivery with Jenkins." },
    { title: "Git", description: "Version control with Git." },
    { title: "CI/CD", description: "Implementing Continuous Integration and Continuous Delivery pipelines." },
    { title: "C#", description: "Experience with C# programming language." },
    { title: "C++", description: "Experience with C++ programming language." },
    { title: "Assembly Script", description: "Experience with AssemblyScript." },
    { title: "Go", description: "Experience with Go programming language." },
    { title: "GraphQL", description: "Experience with GraphQL." },
    { title: "HTML5", description: "Experience with HTML5." },
    { title: "Java", description: "Experience with Java programming language." },
    { title: "JavaScript", description: "Experience with JavaScript programming language." },
    { title: "Kotlin", description: "Experience with Kotlin programming language." },
    { title: "Lua", description: "Experience with Lua programming language." },
    { title: "Markdown", description: "Experience with Markdown." },
    { title: "PHP", description: "Experience with PHP programming language." },
    { title: "Powershell", description: "Experience with Powershell." },
    { title: "Python", description: "Experience with Python programming language." },
    { title: "Rust", description: "Experience with Rust programming language." },
    { title: "Swift", description: "Experience with Swift programming language." },
    { title: "Typescript", description: "Experience with TypeScript programming language." },
    { title: "Windows Terminal", description: "Experience with Windows Terminal." },
    { title: "Cloudflare", description: "Experience with Cloudflare." },
    { title: "Firebase", description: "Experience with Firebase." },
    { title: "Glitch", description: "Experience with Glitch." },
    { title: "Render", description: "Experience with Render." },
    { title: "Vercel", description: "Experience with Vercel." },
    { title: ".NET", description: "Experience with .NET framework." },
    { title: "Django", description: "Experience with Django framework." },
    { title: "Express.js", description: "Experience with Express.js framework." },
    { title: "FastAPI", description: "Experience with FastAPI framework." },
    { title: "Flask", description: "Experience with Flask framework." },
    { title: "Flutter", description: "Experience with Flutter framework." },
    { title: "JWT", description: "Experience with JSON Web Tokens." },
    { title: "Node.js", description: "Experience with Node.js runtime." },
    { title: "Next", description: "Experience with Next.js framework." },
    { title: "NestJS", description: "Experience with NestJS framework." },
    { title: "NPM", description: "Experience with Node Package Manager." },
    { title: "Nuxt", description: "Experience with Nuxt.js framework." },
    { title: "OpenCV", description: "Experience with OpenCV library." },
    { title: "OpenGL", description: "Experience with OpenGL." },
    { title: "React", description: "Experience with React library." },
    { title: "Socket.IO", description: "Experience with Socket.IO." },
    { title: "Vite", description: "Experience with Vite build tool." },
    { title: "Nginx", description: "Experience with Nginx web server." },
    { title: "Apache", description: "Experience with Apache web server." },
    { title: "MySQL", description: "Experience with MySQL database." },
    { title: "MongoDB", description: "Experience with MongoDB database." },
    { title: "SQLite", description: "Experience with SQLite database." },
    { title: "Redis", description: "Experience with Redis." },
    { title: "Prisma", description: "Experience with Prisma ORM." },
    { title: "Postgres", description: "Experience with PostgreSQL database." },
    { title: "Supabase", description: "Experience with Supabase." },
    { title: "Blender", description: "Experience with Blender." },
    { title: "Figma", description: "Experience with Figma." },
    { title: "Keras", description: "Experience with Keras library." },
    { title: "Numpy", description: "Experience with NumPy library." },
    { title: "Pytorch", description: "Experience with PyTorch library." },
    { title: "Tensorflow", description: "Experience with TensorFlow library." },
    { title: "Git", description: "Experience with Git version control." },
  ].filter((skill) => {
    if (uniqueSkills.has(skill.title)) {
      return false;
    }
    uniqueSkills.add(skill.title);
    return true;
  });
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-x-hidden">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-zinc-300">
            I've worked with a variety of technologies and tools. Here are some of them.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.title}>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  className="z-20 lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display"
                >
                  {skill.title}
                </h2>
                <p className="z-20 mt-4 text-sm duration-1000 text-zinc-200 group-hover:text-zinc-100">
                  {skill.description}
                </p>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
