"use client";
import React from "react";
import FadeTextDemo from './main_text/main_text.js';
import { Typography } from '@mui/material';
import FeaturesSection from './feature/feature.js';
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useRouter } from 'next/navigation';

export default function App() {
  const router = useRouter();
  const handleSignup = () => {
    router.push("/signup");
  };
  return (
    <div style={{ backgroundColor: "white", color: "white", minHeight: "100vh" }}>
      <div>
        {/* Landing Page with HTML as Background */}
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative", // Ensures layering for the iframe
            flexDirection: "column", // Stacks the content vertically
          }}
        >
          {/* HTML Background as iframe */}
          <iframe
            src="/temp_home/icon.html" // Update path as necessary
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
              zIndex: 1,
              // borderRadius: "100px",
              // border: "10px solid transparent",
            }}
            title="Background HTML"
          ></iframe>

          {/* Render FadeTextDemo and RainbowButtonDemo */}
          <div style={{ textAlign: 'center', zIndex: 2 }}>
            <FadeTextDemo />
            {/* Add some margin-top to give space between the text and button */}
            <div style={{ marginTop: "200px", zIndex: 2 }}>
            <RainbowButton onClick={handleSignup}>Let's Sign in</RainbowButton>;
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - 80% Width */}
      <div
  style={{
    width: "80%",
    margin: "0 auto", // Centers the section
  }}
>
</div>


      {/* Testimonials - Full Width */}
<div
  style={{
    width: "60%",
    // padding: "32px 0",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    color: "black",
    display: "flex",  // Use flex to center content
    justifyContent: "center",  // Horizontally center
    alignItems: "center",  // Vertically center
    margin: "0 auto", 
    marginTop: "50px " // Center the div within its parent
  }}
>
</div>


      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#FF5722",
          color: "#fff",
          textAlign: "center",
          padding: "16px 0",
          marginTop: "16px",
        }}
      >
        <Typography variant="body2">
          &copy; 2024 lifebalance. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}
