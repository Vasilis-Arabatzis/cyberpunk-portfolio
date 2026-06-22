import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Σωστή τοποθεσία: Στο root επίπεδο του configuration
  allowedDevOrigins: ["192.168.1.18", "localhost:3000"]
};

export default nextConfig;