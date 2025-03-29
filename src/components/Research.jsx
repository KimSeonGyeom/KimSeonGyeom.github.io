import useBaseStore from '../store/baseStore';

function Research() {
  const { profile } = useBaseStore();
  
  return (
    <section className="research-section">
      <div className="research-content" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          I'm actively involved in research projects focused on advancing the state of the art in my fields of interest. 
          Below are some of my current and past research projects.
        </p>
        
        <div className="research-projects">
          {profile.research.map((project, index) => (
            <div className="research-project" key={index}>
              <h3>{project.title}</h3>
              <span className="date">{project.date}</span>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  Learn more
                </a>
              )}
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <h3>Publications</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <li style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '6px' }}>
              <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                Example Publication Title (2023)
              </span>
              <p>Authors: Kim S.G., et al.</p>
              <p>Journal/Conference: International Conference on Machine Learning</p>
            </li>
            <li style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '6px' }}>
              <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                Another Publication Example (2022)
              </span>
              <p>Authors: Kim S.G., et al.</p>
              <p>Journal/Conference: Neural Information Processing Systems</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Research; 