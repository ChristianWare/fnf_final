// src/icons/Update/Update.tsx
import { SVGProps } from "react";

export default function Update(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props} // allows overriding size, className, etc.
    >
      <path
        d='M20.5 9.00006C19 5.00024 15.5334 3.00122 11.9991 3.00122C7.36722 3.00122 3.55265 6.50073 3.05499 11.0001M20.9428 13.005C20.4434 17.5025 16.6297 21 11.9991 21C8.46723 21 5 19.0001 3.5 15.0002M21 5.00006V9.00006H17M3 19.0001V15.0001H7M12 8.00006V13.0001M12 16.0001H12.01'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
