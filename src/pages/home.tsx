// Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif"
    }}>
      {/* Header with Logo */}
      <header style={{
        padding: '20px',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ height: '40px' }}>
          <img 
            src="/logo.png" 
            alt="Beyond Banking Logo" 
            style={{ height: '100%', width: 'auto' }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '60px',
          fontSize: '24px',
          color: '#333'
        }}>
          <span style={{ fontWeight: '500' }}>webtech.net.ng</span>
          <span style={{ margin: '0 5px', color: '#666' }}>/</span>
          <span style={{ fontWeight: '600', color: '#1a5fb4' }}>OPa</span>
        </div>
        
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#111',
          marginBottom: '60px',
          lineHeight: '1.2'
        }}>
          We are Beyond Banking
        </h1>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div>
            <span style={{
              fontSize: '18px',
              color: '#555',
              lineHeight: '1.5'
            }}>
              Licensed by the CBN and insured by the
            </span>
          </div>
          <div>
            <img 
              src="/bottom.png" 
              alt="NDIC Logo" 
              style={{ height: '40px', width: 'auto' }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;