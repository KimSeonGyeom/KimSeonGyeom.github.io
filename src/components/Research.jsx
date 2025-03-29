import useBaseStore from '../store/baseStore';

function Research() {
  const { profile } = useBaseStore();
  
  return (
    <section className="research-section">
      <div className="research-content">
        <h2>Research</h2>
        <div className="research-projects">
          {profile.research.map((project, index) => (
            <div className="research-project" key={index}>
              <h3>{index + 1}. {project.title}</h3>
              <div className="research-project-date">{project.date} / {project.link != "#" ? (<a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>):("WIP")} / {project.status}</div>
              <img src={project.image} alt={project.title} />
              {/* <p>{project.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research; 