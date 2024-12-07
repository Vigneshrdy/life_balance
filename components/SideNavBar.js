import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

const SideNavBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const router = useRouter();
  const { signOut } = useAuth();

  const navButtons = [
    { icon: 'palette', label: 'Dashboard', onClick: () => router.push('/dashboard') },
    { icon: 'chart-line', label: 'Reports', onClick: () => router.push('/abc.html') },
    //{ icon: 'images', label: 'Mediseva', onClick: () => router.push('/chatbot') },
    //{ icon: 'user', label: 'Profile', onClick: () => router.push('/profile') },
   // { icon: 'cog', label: 'Settings', onClick: () => router.push('/settings') },
    { icon: 'sign-out-alt', label: 'Logout', onClick: async () => { await signOut(); router.push('/'); } }
  ];

  const navBarStyle = {
    width: '250px',
    backgroundColor: '#2c3e50',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    position: 'fixed',
    left: '10px',
    top: '50%', // Start from the center of the viewport
    transform: 'translateY(-50%)', // Adjust to center the sidebar vertically
    height: 'calc(100vh - 80px)', // Adjust height to fit the new position
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' // Center items horizontally
  };

  const navButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center content horizontally
    padding: '12px 15px',
    margin: '5px 0',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s, transform 0.2s',
    position: 'relative',
    width: '100%', // Make buttons take full width
    textAlign: 'center' // Center text within the button
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '1.2em'
  };

  return (
    <div style={navBarStyle}>
      <div style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px' }}>LifeBalance</div>
      <hr style={{ width: '100%', borderColor: 'white' }} />
      {navButtons.map((button, index) => (
        <div
          key={index}
          style={navButtonStyle}
          onClick={button.onClick}
          aria-label={button.label}
        >
          <i className={`fas fa-${button.icon}`} style={iconStyle} />
          <span>{button.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SideNavBar;