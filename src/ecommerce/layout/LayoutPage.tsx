
import { Box } from "@mui/material";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ReactNode } from "react";

type LayoutPageProps = {
  children: ReactNode; 
};

export const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" className="bg-gray-100">
      {/* Navbar */}
      <Box className="shadow-md sticky top-0 z-50 bg-white">
        <Navbar />
      </Box>

      {/* Main Content */}
      <Box component="main" flexGrow={1} className="px-4 md:px-12 lg:px-20 py-8">
        {children}
      </Box>

      {/* Footer */}
      <Box className="bg-gray-800 text-white">
        <Footer />
      </Box>
    </Box>
  );
};
