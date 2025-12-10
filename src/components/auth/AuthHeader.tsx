import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animationVariants";

interface AuthHeaderProps {
  title: string;
  description: string;
}

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="text-center mb-8"
    >
      <h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
        style={{ color: "var(--color-text-main)" }}
      >
        {title}
      </h1>
      <p
        className="text-base sm:text-lg"
        style={{ color: "var(--color-text-body)" }}
      >
        {description}
      </p>
    </motion.div>
  );
};

export default AuthHeader;
