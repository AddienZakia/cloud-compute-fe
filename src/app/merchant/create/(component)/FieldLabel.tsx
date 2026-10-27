import Typography from '@/components/Typography';
import { Label } from '@/components/ui/label';
import * as React from 'react';

export type FieldLabelProps = {
  htmlFor?: string;
  label: string;
  required?: boolean;
  rightElement?: React.ReactNode;
};

export default function FieldLabel({
  htmlFor,
  label,
  required,
  rightElement,
}: FieldLabelProps) {
  return (
    <div className="flex items-center justify-between gap-2 mb-1.5">
      <Label
        htmlFor={htmlFor}
        className="flex items-center gap-1 cursor-pointer"
      >
        <Typography
          as="span"
          variant="s"
          weight="bold"
          className="text-neutral-90"
        >
          {label}
        </Typography>
        {required && <span className="text-danger-main font-bold">*</span>}
      </Label>
      {rightElement && <div className="shrink-0">{rightElement}</div>}
    </div>
  );
}
