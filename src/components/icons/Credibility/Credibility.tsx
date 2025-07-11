// src/icons/Credibility/Credibility.tsx
import { SVGProps } from "react";

export default function Credibility(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='lucide lucide-credibility-icon'
      {...props} // allows overriding size, className, etc.
    >
      <path
        d='M15 16L20 21M20 16L15 21M11 14C7.13401 14 4 17.134 4 21H11M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
