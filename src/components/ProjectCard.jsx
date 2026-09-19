import { ExternalLinkIcon, GitHubIcon } from './Icons'

export function ProjectCard({ project, index }) {
  return (
    <article className="project-card reveal">
      <div className="project-media">
        <div className="project-main-image browser-preview">
          <div className="browser-toolbar" aria-hidden="true">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-address">{project.title}</span>
          </div>
          <div className="project-image-stage">
            <img src={project.images[0]} alt={`${project.title} home page`} loading="lazy" />
          </div>
        </div>
        <div className="project-thumbnails">
          {project.images.slice(1, 3).map((image, imageIndex) => (
            <div className="project-thumbnail" key={image}>
              <img
                src={image}
                alt={`${project.title} interface view ${imageIndex + 2}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="project-content">
        <span className="project-number">
          Project {String(index + 1).padStart(2, '0')}
        </span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a
            className="button button-primary"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo <ExternalLinkIcon />
          </a>
          <a
            className="button button-secondary"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
