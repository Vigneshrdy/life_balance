import * as React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";

export default function TopNavBar() {
  const router = useRouter();
  const theme = useTheme();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#D91656" }}>
      <Toolbar>
        {/* Circular Logo */}
        <Box
          component="img"
          src="/logo.png" // Ensure this logo is in the public folder
          alt="Logo"
          sx={{
            height: 60, // Adjust the size as needed
            width: 60,
            borderRadius: "50%", // Makes the image circular
            objectFit: "cover", // Ensures the image is not stretched
            marginRight: 2, // Adds spacing between the logo and buttons
          }}
        />

        {/* Spacer to push buttons to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Login and Signup Buttons */}
        <Button color="inherit" onClick={handleLogin} sx={{ color: "#ffffff" }}>
          Login
        </Button>
        <Button color="inherit" onClick={handleSignup} sx={{ color: "#ffffff" }}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}
