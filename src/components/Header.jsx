import useBaseStore from '../store/baseStore';

function Header() {
  const { activeSection, setActiveSection, profile } = useBaseStore();
  
  const navItems = [
    { id: 'research-interests', label: 'Research Interests' },
    { id: 'research', label: 'Research' },
    { id: 'resume', label: 'Resume' }
  ];
  
  return (
    <header className="header">
      <div className="profile-header">
        <img src={profile.profileImage} alt={profile.name} className="profile-image" />
        <div className="profile-title">
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="profile-about">{profile.about}</p>
          <div className="profile-contact">
            <p><strong>Email:</strong> {profile.contact.email}</p>
          </div>
        </div>
      </div>
      
      <nav className="navigation">
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <button 
                className={activeSection === item.id ? 'active' : ''} 
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header; 