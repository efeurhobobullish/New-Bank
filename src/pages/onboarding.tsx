import React from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleCreateAccount = () => {
    // Navigates to the signup route
    navigate('/signup'); 
  };

  const handleLogin = () => {
    // Navigates to the login route
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      
      {/* Top Section: Logo */}
      <div style={styles.header}>
        <img 
          src="/qr_opay.png" 
          alt="OPay Logo" 
          style={styles.topLogo} 
        />
      </div>

      {/* Middle Section: Illustration & Text */}
      <div style={styles.content}>
        
        {/* Headline */}
        <h2 style={styles.headline}>
          <span style={styles.greenText}>Instant and Free</span>{' '}
          <span style={styles.blackText}>Transfer</span>
        </h2>

        {/* Main Illustration */}
        <div style={styles.imageContainer}>
          <img 
            src="/olog.png" 
            alt="Transfer Illustration" 
            style={styles.mainImage} 
          />
        </div>

        {/* Description Text */}
        <p style={styles.description}>
          Enjoy Opay to Opay transfer & up to 90 FREE transfers monthly to other banks
        </p>
      </div>

      {/* Bottom Section: Buttons & Footer */}
      <div style={styles.footerSection}>
        
        {/* Buttons */}
        <div style={styles.buttonContainer}>
          <button style={styles.primaryButton} onClick={handleCreateAccount}>
            Create a new account
          </button>
          
          <button style={styles.secondaryButton} onClick={handleLogin}>
            Login
          </button>
        </div>

        {/* Regulatory Footer Image */}
        <img 
          src="/footer.png" 
          alt="Licensed by CBN and insured by NDIC" 
          style={styles.footerImage} 
        />
      </div>
    </div>
  );
};

// CSS Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
    justifyContent: 'space-between', // Spreads content out
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  },
  topLogo: {
    height: '40px', // Adjust based on your logo size
    width: 'auto',
  },
  content: {
    flex: 1, // Takes up remaining space
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Centers vertically
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  headline: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '30px',
    marginTop: '0px',
  },
  greenText: {
    color: '#00C675', // OPay Green
  },
  blackText: {
    color: '#000000',
  },
  imageContainer: {
    marginBottom: '30px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  mainImage: {
    width: '80%', // Responsive width
    maxWidth: '280px',
    height: 'auto',
  },
  description: {
    color: '#1B1F4F', // Dark text color
    fontSize: '15px',
    lineHeight: '1.5',
    maxWidth: '320px', // Limits width for better readability
    margin: '0 auto',
    fontWeight: '500',
  },
  footerSection: {
    width: '100%',
    maxWidth: '400px', // Prevents buttons from getting too wide on desktop
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '20px',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
  },
  primaryButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#00C675', // OPay Green
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '25px', // Rounded pill shape
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 198, 117, 0.3)',
  },
  secondaryButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#FFFFFF',
    color: '#00C675',
    border: '1px solid #00C675', // Green border
    borderRadius: '25px', // Rounded pill shape
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  footerImage: {
    height: 'auto',
    width: 'auto',
    maxHeight: '30px', // Keeps the regulatory logo small
    maxWidth: '80%',
    opacity: 0.8,
  },
};

export default Onboarding;


