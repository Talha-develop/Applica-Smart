import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "elevated";
}

const Card = ({ children, className = "", variant = "default" }: CardProps) => {
  const variants = {
    default: "shadow-md",
    bordered: "border-2",
    elevated: "shadow-xl",
  };

  const getBorderColor = () => {
    if (variant === "bordered") return { borderColor: "var(--color-accent)" };
    return {};
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl p-8 ${variants[variant]} ${className}`}
      style={{ backgroundColor: "var(--color-surface)", ...getBorderColor() }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
