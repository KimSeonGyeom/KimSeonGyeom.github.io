import useBaseStore from '../store/baseStore';

function Header() {
  const { profile } = useBaseStore();
  
  return (
    <header className="header">
      <div className="profile-header">
        <img src={profile.profileImage} alt={profile.name} className="profile-image" />
        <div className="profile-title">
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="profile-about">
            I am a Ph.D. candidate at <a href="https://reflect9.github.io/ael/" target="_blank" rel="noopener noreferrer">AEL, KAIST</a>, under the supervision of <a href="https://takyeonlee.com/" target="_blank" rel="noopener noreferrer">Prof. Tak Yeon Lee</a>.
            <br/>My research focuses on <strong>Understanding and Facilitating Experiential Impacts of Visual Features</strong>.
            Currently, I am interested in <strong>Embellished Chart</strong>, which utilizes design patterns like <strong>3D</strong>, <strong>Animated Transition</strong>, and <strong>Semantic Illustration</strong> for particular communicative purposes.
          </p>
          <div className="profile-contact">
            {/* <p><a href={profile.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p> / </p> */}
            <p><a href="/CV_SeonGyeomKim.pdf" target="_blank" rel="noopener noreferrer">CV</a></p> /
            <p><strong>Email:</strong> {profile.contact.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 