import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}

const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  required = false,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      {type === "textarea" ? (
        <Textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={error ? "border-destructive" : ""}
          rows={5}
        />
      ) : (
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={error ? "border-destructive" : ""}
        />
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default FormField;
