import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeIn } from "../../utils/animationVariants";

interface AuthFooterProps {
  text: string;
  linkText: string;
  linkTo: string;
}

const AuthFooter = ({ text, linkText, linkTo }: AuthFooterProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay: 0.4 }}
      className="mt-6 text-center"
    >
      <p style={{ color: "var(--color-text-body)" }}>
        {text}{" "}
        <Link
          to={linkTo}
          className="font-semibold transition-colors"
          style={{ color: "var(--color-primary)" }}
        >
          {linkText}
        </Link>
      </p>
    </motion.div>
  );
};

export default AuthFooter;
