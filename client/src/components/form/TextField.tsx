import {
  type FieldValues,
  type FieldError,
  type Path,
  type RegisterOptions,
  type UseFormRegister,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  error?: FieldError;
  type?: string;
  placeholder?: string;
};

export default function TextField<T extends FieldValues>({
  label,
  name,
  register,
  rules,
  error,
  type = "text",
  placeholder,
}: Props<T>) {
  return (
    <div>
      <label className="mb-2 block text-sm text-text-secondary">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className="
          w-full
          rounded-2xl
          border
          border-border
          px-4
          py-4
          outline-none
          transition
          focus:border-primary
        "
      />
      {error && <p className="mt-2 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
