import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to onboarding after 3 seconds
    const timer = setTimeout(() => {
      navigate('/onboarding'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

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

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#00C675', // UPDATED: Exact vibrant green from image
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
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    // Optional: Add a subtle shadow if you want it to pop like the app
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)', 
  },
  logo: {
    width: '60px',
    height: 'auto',
  },
  tagline: {
    color: '#272D4E', // UPDATED: Exact dark navy from image text
    fontSize: '22px',
    fontWeight: '700', // Made text slightly bolder
    marginTop: '10px',
    textAlign: 'center',
  },
  bottomContainer: {
    paddingBottom: '40px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  bottomImage: {
    maxWidth: '80%',
    height: 'auto',
    maxHeight: '60px',
  },
};

export default Home;
