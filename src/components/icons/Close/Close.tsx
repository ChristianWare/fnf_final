import { SVGProps } from "react";

export default function Close(props: SVGProps<SVGSVGElement>) {
  return (
    // <svg
    //   viewBox='0 0 24 24'
    //   width='1em'
    //   height='1em'
    //   fill='none'
    //   stroke='currentColor'
    //   strokeWidth={2}
    //   strokeLinecap='round'
    //   strokeLinejoin='round'
    //   className='lucide lucide-x-icon'
    //   xmlns='http://www.w3.org/2000/svg'
    //   {...props}
    // >
    //   <path d='M18 6 6 18' />
    //   <path d='M6 6 18 18' />
    // </svg>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-circle-x-icon lucide-circle-x'
      {...props}
    >
      <circle cx='12' cy='12' r='10' />
      <path d='m15 9-6 6' />
      <path d='m9 9 6 6' />
    </svg>
  );
}
