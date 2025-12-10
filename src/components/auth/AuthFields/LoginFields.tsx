import Input from "../../ui/Input";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { LoginFormData } from "../../../utils/validators/loginSchema";

interface LoginFieldsProps {
  register: UseFormRegister<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
}

const LoginFields = ({ register, errors }: LoginFieldsProps) => {
  return (
    <div className="space-y-4">
      <Input
        {...register("email")}
        label="Email Address"
        type="email"
        placeholder="you@example.com"
        error={errors.email?.message}
        required
        leftIcon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        }
      />

      <Input
        {...register("password")}
        label="Password"
        type="password"
        placeholder="••••••••"
        error={errors.password?.message}
        required
        leftIcon={
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        }
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            {...register("rememberMe")}
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span
            className="ml-2 text-sm"
            style={{ color: "var(--color-text-body)" }}
          >
            Remember me
          </span>
        </label>

        <a
          href="#"
          className="text-sm font-medium"
          style={{ color: "var(--color-primary)" }}
        >
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default LoginFields;
