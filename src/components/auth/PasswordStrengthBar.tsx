import { motion } from "framer-motion";
import { useMemo } from "react";

interface PasswordStrengthBarProps {
  password: string;
}

const PasswordStrengthBar = ({ password }: PasswordStrengthBarProps) => {
  const strength = useMemo(() => {
    if (!password) return 0;

    let score = 0;

    // Length check
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    // Character variety checks
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return Math.min(score, 5);
  }, [password]);

  const getStrengthColor = () => {
    if (strength <= 2) return "var(--color-error)";
    if (strength <= 3) return "var(--color-warning)";
    if (strength <= 4) return "var(--color-accent)";
    return "var(--color-success)";
  };

  const getStrengthText = () => {
    if (strength === 0) return "";
    if (strength <= 2) return "Weak";
    if (strength <= 3) return "Fair";
    if (strength <= 4) return "Good";
    return "Strong";
  };

  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4, 5].map((level) => (
          <motion.div
            key={level}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: level * 0.05 }}
            className="h-1 flex-1 rounded-full transition-all"
            style={{
              backgroundColor:
                level <= strength
                  ? getStrengthColor()
                  : "var(--color-accent-light)",
            }}
          />
        ))}
      </div>
      <p
        className="text-xs font-medium"
        style={{
          color: getStrengthColor(),
        }}
      >
        {getStrengthText()}
      </p>
    </div>
  );
};

export default PasswordStrengthBar;
