import React, { useEffect, useState } from 'react';
import RoutesConfig from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, 
              rgba(74, 144, 226, ${0.1 + Math.random() * 0.1}) 0%, 
              rgba(155, 81, 224, ${0.05 + Math.random() * 0.1}) 50%, 
              transparent 70%)`,
            borderRadius: '50%',
            animation: `particleFloat ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            filter: 'blur(15px)'
          }}
        />
      ))}
    </div>
  );
};

const CyberGrid = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `
        linear-gradient(rgba(12, 20, 68, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(12, 20, 68, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
      zIndex: 0,
      opacity: 0.3
    }} />
  );
};

const StatusIndicator = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 20,
      right: 20,
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: isOnline ? '#00ff88' : '#ff4444',
      boxShadow: `0 0 20px ${isOnline ? '#00ff88' : '#ff4444'}`,
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }} />
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #0c1444 0%, #1a237e 30%, #4a1b6d 70%, #311b4d 100%)',
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <CyberGrid />
      <ParticleBackground />
      
      {/* Glowing Orbs */}
      <div style={{
        position: 'fixed',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(56, 103, 214, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'orbPulse 8s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'fixed',
        bottom: '10%',
        right: '15%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(155, 81, 224, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(30px)',
        animation: 'orbPulse 12s ease-in-out infinite reverse'
      }} />

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <RoutesConfig />
      </div>

      <StatusIndicator />

      {/* Enhanced Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ marginTop: '60px' }}
        toastStyle={{
          background: 'rgba(18, 26, 64, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(74, 144, 226, 0.3)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          color: '#e2e8f0',
          fontSize: '13px',
          fontWeight: '500',
          fontFamily: "'JetBrains Mono', monospace"
        }}
        progressStyle={{
          background: 'linear-gradient(90deg, #4a90e2, #9b51e0)'
        }}
      />

      {/* Global Styles */}
      <style>{`
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.7;
          }
          33% {
            transform: translateY(-30px) translateX(15px) scale(1.1);
            opacity: 1;
          }
          66% {
            transform: translateY(20px) translateX(-10px) scale(0.9);
            opacity: 0.8;
          }
        }
        
        @keyframes orbPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes cyberGlow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(74, 144, 226, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(74, 144, 226, 0.8), 0 0 30px rgba(155, 81, 224, 0.6);
          }
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(18, 26, 64, 0.3);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #4a90e2, #9b51e0);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #5a9ff2, #a961f0);
        }
        
        /* Selection */
        ::selection {
          background: rgba(74, 144, 226, 0.4);
          color: #ffffff;
        }
        
        /* Focus */
        *:focus {
          outline: 2px solid #4a90e2;
          outline-offset: 1px;
        }
        
        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Loading Overlay */}
      {isLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(12, 20, 68, 0.9)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          fontFamily: "'JetBrains Mono', monospace"
        }}>
          <div style={{
            textAlign: 'center',
            color: '#e2e8f0'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              border: '3px solid rgba(74, 144, 226, 0.3)',
              borderTop: '3px solid #4a90e2',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px'
            }} />
            <div style={{
              fontSize: '16px',
              fontWeight: '600',
              background: 'linear-gradient(90deg, #4a90e2, #9b51e0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'cyberGlow 2s ease-in-out infinite'
            }}>
              SYSTEM INITIALIZING
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .cyber-card {
          background: rgba(18, 26, 64, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(74, 144, 226, 0.2);
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cyber-card:hover {
          transform: translateY(-5px);
          border-color: rgba(74, 144, 226, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
                      0 0 80px rgba(74, 144, 226, 0.1);
        }
        
        .neon-text {
          background: linear-gradient(90deg, #4a90e2, #9b51e0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: cyberGlow 3s ease-in-out infinite;
        }
        
        .cyber-button {
          background: linear-gradient(135deg, #4a90e2, #9b51e0);
          border: none;
          border-radius: 8px;
          color: white;
          padding: 12px 24px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .cyber-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .cyber-button:hover::before {
          left: 100%;
        }
        
        .cyber-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(74, 144, 226, 0.3);
        }
      `}</style>
    </div>
  );
};

export default App;