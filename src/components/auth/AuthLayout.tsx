import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { APP_NAME } from "../../utils/constants";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8 sm:p-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, var(--color-background), var(--color-surface), var(--color-accent-light))",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-5 sm:left-10 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#780000]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-5 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#C1121F]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/4 sm:left-1/3 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[#669BBC]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-xl sm:text-2xl font-bold transition-colors"
          style={{ color: "var(--color-primary)" }}
        >
          {APP_NAME}
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">{children}</div>
    </div>
  );
};

export default AuthLayout;
