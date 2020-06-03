import * as React from "react";
import LoginComponents from "../../components/Login";
import { motion } from "framer-motion";

export const LoginPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ damping: 10, duration: 2 }}
    >
      <LoginComponents />
    </motion.div>
  );
};
