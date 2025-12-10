import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, Target, Zap } from "lucide-react";
import {
  fadeInUp,
  slideInFromLeft,
  slideInFromRight,
  floatingAnimation,
} from "../../utils/animationVariants";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(to bottom right, var(--color-background), var(--color-surface), var(--color-accent-light))",
      }}
    >
      {" "}
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#780000]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
          className="absolute top-40 right-10 w-72 h-72 bg-[#C1121F]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
          className="absolute -bottom-8 left-1/3 w-72 h-72 bg-[#669BBC]/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{
                  backgroundColor: "var(--color-accent-light)",
                  color: "var(--color-primary)",
                }}
              >
                <Sparkles className="w-4 h-4" />
                AI-Powered Job Application Platform
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              style={{ color: "var(--color-text-main)" }}
            >
              Land Your Dream Job{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#780000] to-[#C1121F]">
                Automatically
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--color-text-body)" }}
            >
              Let AI handle the tedious job application process while you focus
              on what matters. Apply to hundreds of positions with personalized
              resumes and cover letters.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(120, 0, 0, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/signup")}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-[#780000] to-[#C1121F] text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                Start Applying Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transition-all border-2 w-full sm:w-auto"
                style={{
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-text-main)",
                  borderColor: "var(--color-accent)",
                }}
              >
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-4"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#780000] to-[#C1121F] border-2 border-white"
                    />
                  ))}
                </div>
                <span
                  className="ml-3 font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  10,000+ users
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
                <span
                  className="ml-2 font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  4.9/5
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Illustration */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight}
            className="relative"
          >
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="relative rounded-2xl shadow-2xl p-8 border"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-accent)",
              }}
            >
              <div className="space-y-6">
                {/* Mock Application Card */}
                <div className="bg-gradient-to-br from-[#FDF0D5] to-[#669BBC]/10 rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#780000] rounded-lg flex items-center justify-center text-white text-xl font-bold">
                      A
                    </div>
                    <div>
                      <h3
                        className="font-semibold"
                        style={{ color: "var(--color-text-main)" }}
                      >
                        Senior Software Engineer
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Talha Software .inc
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        color: "var(--color-success)",
                      }}
                    >
                      ✓ Applied
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "var(--color-accent-light)",
                        color: "var(--color-primary)",
                      }}
                    >
                      95% Match
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div
                    className="rounded-lg p-4 text-center shadow-sm"
                    style={{ backgroundColor: "var(--color-background)" }}
                  >
                    <p
                      className="text-2xl font-bold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      47
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Applied
                    </p>
                  </div>
                  <div
                    className="rounded-lg p-4 text-center shadow-sm"
                    style={{ backgroundColor: "var(--color-background)" }}
                  >
                    <p className="text-2xl font-bold text-green-600">12</p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Responses
                    </p>
                  </div>
                  <div
                    className="rounded-lg p-4 text-center shadow-sm"
                    style={{ backgroundColor: "var(--color-background)" }}
                  >
                    <p className="text-2xl font-bold text-[#C1121F]">5</p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Interviews
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 rounded-full p-4 shadow-lg"
              style={{ backgroundColor: "var(--color-surface)" }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Target
                className="w-8 h-8"
                style={{ color: "var(--color-primary)" }}
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 rounded-full p-4 shadow-lg"
              style={{ backgroundColor: "var(--color-surface)" }}
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Zap
                className="w-8 h-8"
                style={{ color: "var(--color-primary-hover)" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
