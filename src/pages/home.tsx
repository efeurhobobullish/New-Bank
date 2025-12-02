import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timer for 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      navigate('/onboarding'); // Change this to your actual route path
    }, 3000);

    // Cleanup function: clears the timer if the user leaves the page manually
    // prevents memory leaks
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

// CSS Styles Object
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#00c06d',
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
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  logo: {
    width: '60px',
    height: 'auto',
  },
  tagline: {
    color: '#1B1F4F',
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
    maxWidth: '80%',
    height: 'auto',
    maxHeight: '60px',
  },
};

export default Home;
