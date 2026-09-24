import { ExternalLinkIcon, GitHubIcon } from './Icons'

export function ProjectCard({ project, index }) {
  const hasImages = project.images?.length > 0
  const isFeatured = project.id === 'gearlab-store'

  return (
    <article className={`project-card reveal${isFeatured ? ' project-card--featured' : ''}${!hasImages && !isFeatured ? ' project-card--text' : ''}`}>
      {hasImages && (
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
            {project.images.slice(1).map((image, imageIndex) => (
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
      )}
      <div className="project-content">
        <span className="project-number">
          Project {String(index + 1).padStart(2, '0')}
        </span>
        {project.label && <span className="project-label">{project.label}</span>}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.highlights && (
          <ul className="project-highlights" aria-label={`${project.title} highlights`}>
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        )}
        <ul className="tech-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {(project.liveUrl || project.githubUrl) && (
          <div className="project-actions">
            {project.liveUrl && (
              <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo <ExternalLinkIcon />
              </a>
            )}
            {project.githubUrl && (
              <a className="button button-secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
