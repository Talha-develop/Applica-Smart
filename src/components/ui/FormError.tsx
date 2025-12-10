import { motion, AnimatePresence } from "framer-motion";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10, height: 0 }}
        animate={{ opacity: 1, y: 0, height: "auto" }}
        exit={{ opacity: 0, y: -10, height: 0 }}
        className="rounded-lg p-4 mb-4"
        style={{
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          border: "1px solid var(--color-error)",
        }}
      >
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <h3
              className="text-sm font-medium"
              style={{ color: "var(--color-error)" }}
            >
              Error
            </h3>
            <p className="text-sm mt-1" style={{ color: "var(--color-error)" }}>
              {message}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FormError;
