import useBaseStore from '../store/baseStore';

function Timeline() {
  const { profile } = useBaseStore();
  
  return (
    <section className="timeline-section">
      <div className="timeline-content-wrapper" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          My professional journey includes academic and research experience in the field of computer science.
          Below is a timeline of my career progression.
        </p>
        
        <h3>Work Experience</h3>
        <div className="vertical-timeline">
          {profile.timeline.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>
                <span className="timeline-period">{item.period}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <h3>Education</h3>
          <div className="education-info">
            <div className="education-item">
              <span className="education-period">2020-Present</span>
              <p>PhD in Computer Science, KAIST</p>
            </div>
            <div className="education-item">
              <span className="education-period">2018-2020</span>
              <p>MS in Computer Science, KAIST</p>
            </div>
            <div className="education-item">
              <span className="education-period">2014-2018</span>
              <p>BS in Computer Science, Seoul National University</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline; 