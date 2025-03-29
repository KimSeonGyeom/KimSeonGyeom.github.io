import useBaseStore from '../store/baseStore';

function Education() {
  const { profile } = useBaseStore();
  
  return (
    <section className="section">
      <div className="section-content">
        <h2>Education</h2>
        <div className="section-education">
          {profile.education.map((item, index) => (
            <div className="education-item" key={index}>
              <h3>{item.title}</h3>
              <div className="education-item-organization">{item.organization}</div>
              <div className="education-item-date">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education; 