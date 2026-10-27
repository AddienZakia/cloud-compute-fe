'use client';

import { useWatch } from 'react-hook-form';
import {
  section1Schema,
  section2Schema,
  section3Schema,
} from '../_schema/section-schemas';

export function useSectionValidity() {
  const values = useWatch();
  const s1 = section1Schema.safeParse(values ?? {}).success;
  const s2 = section2Schema.safeParse(values ?? {}).success;
  const s3 = section3Schema.safeParse({
    varianGroups: values?.varianGroups,
  }).success;
  return [s1, s2, s3] as const;
}
