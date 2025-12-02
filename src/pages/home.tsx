import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Center Content */}
      <div style={styles.centerContent}>
        
        {/* White Circle Background for Logo */}
        <div style={styles.logoWrapper}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={styles.logo} 
          />
        </div>

        <h1 style={styles.tagline}>We are Beyond Banking</h1>
      </div>

      {/* Bottom Footer */}
      <div style={styles.bottomContainer}>
        <img 
          src="/bottom.png" 
          alt="License and Insurance" 
          style={styles.bottomImage} 
        />
      </div>
    </div>
  );
};

// CSS Styles Object
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#00c06d', // The green background
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  centerContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    backgroundColor: 'white',
    borderRadius: '50%', // Makes it a circle
    width: '100px',       // Fixed size for the white circle
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Optional shadow for depth
  },
  logo: {
    width: '60px',
    height: 'auto',
  },
  tagline: {
    color: '#1B1F4F', // Dark Indigo color
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center',
  },
  bottomContainer: {
    paddingBottom: '40px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  bottomImage: {
    maxWidth: '80%', // Responsive width
    height: 'auto',
    maxHeight: '60px',
  },
};

export default Home;
