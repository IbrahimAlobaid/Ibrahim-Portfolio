import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../constants/data';

export function Projects() {
  return (
    <section id="projects" className="section-padding" aria-label="Featured projects">
      <div className="container-max">
        <SectionHeading
          title="Projects"
          subtitle="Featured projects showcasing AI system design and engineering"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
