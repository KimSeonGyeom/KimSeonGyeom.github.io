import useBaseStore from '../store/baseStore';

function ResearchInterests() {
  const { profile } = useBaseStore();
  
  return (
    <section className="research-interests-section">
      <div className="interests-content" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          My research focuses on the following areas that I'm passionate about exploring and advancing.
        </p>
        <ul className="interests-list">
          {profile.researchInterests.map((interest, index) => (
            <li key={index} className="interest-item">
              {interest}
            </li>
          ))}
        </ul>
        
        <div style={{ marginTop: '2rem' }}>
          <h3>Current Focus</h3>
          <p style={{ marginBottom: '1rem' }}>
            I am currently focusing on developing novel approaches to solve complex problems in artificial intelligence and machine learning, with special attention to applications in computer vision and natural language processing.
          </p>
          
          <h3>Future Directions</h3>
          <p>
            My future research aims to bridge the gap between theoretical foundations and practical applications, particularly in developing more efficient and interpretable models for real-world deployment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResearchInterests; 