import { SectionHeading } from '../ui/SectionHeading';
import { TimelineItem } from '../ui/TimelineItem';
import { experiences } from '../../constants/data';

export function Experience() {
  return (
    <section id="experience" className="section-padding" aria-label="Work experience">
      <div className="container-max">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in AI engineering and software development"
        />

        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={`${exp.company}-${exp.role}`}
              experience={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
