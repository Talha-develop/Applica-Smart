import { motion } from "framer-motion";
import { APP_NAME, NAV_LINKS } from "../../utils/constants";
import { fadeIn } from "../../utils/animationVariants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm"
      style={{
        backgroundColor: "var(--color-surface)",
        borderBottom: "1px solid var(--color-accent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              to="/"
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              {APP_NAME}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="transition-colors font-medium"
                style={{ color: "var(--color-text-main)" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors"
              style={{
                color: "var(--color-text-main)",
                backgroundColor: "var(--color-background)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/signup")}
              className="px-4 py-2 font-medium transition-colors"
              style={{ color: "var(--color-primary)" }}
            >
              Sign Up
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(120, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="px-6 py-2 text-white rounded-full font-medium transition-colors shadow-md"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Login
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors"
              style={{
                color: "var(--color-text-main)",
                backgroundColor: "var(--color-background)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
              style={{ color: "var(--color-text-main)" }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4"
            style={{ borderTop: "1px solid var(--color-accent)" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 transition-colors"
                style={{ color: "var(--color-text-main)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 space-y-2">
              <button
                onClick={() => {
                  navigate("/signup");
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-2 font-medium rounded-full transition-colors"
                style={{
                  color: "var(--color-primary)",
                  border: "1px solid var(--color-primary)",
                  backgroundColor: "transparent",
                }}
              >
                Sign Up
              </button>
              <button
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-white rounded-full font-medium transition-colors"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                Login
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
