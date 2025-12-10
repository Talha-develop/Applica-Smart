import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  loginSchema,
  type LoginFormData,
} from "../../utils/validators/loginSchema";
import { useLogin } from "../../hooks/useLogin";
import LoginFields from "../auth/AuthFields/LoginFields";
import Button from "../ui/Button";
import FormError from "../ui/FormError";
import SocialAuthButtons from "../auth/SocialAuthButtons";

const LoginForm = () => {
  const { login, isLoading, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch (err) {
      // Error is handled in the hook
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="space-y-6"
    >
      {error && <FormError message={error} />}

      <LoginFields register={register} errors={errors} />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={isLoading}
      >
        Sign In
      </Button>

      <SocialAuthButtons />
    </motion.form>
  );
};

export default LoginForm;
