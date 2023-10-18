import { SVGProps } from 'react';

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={100}
      viewBox="0 0 200 100"
      {...props}
    >
      <circle cx="50%" cy="50%" r="62%" fill="#4CAF50" />

      <path
        d="M70,10 C60,30 35,30 55,80 Q70,60 85,80 C105,30 80,30 70,10"
        fill="#388E3C"
      />
      <text x="50%" y="60%" fontSize={28} fill="white" textAnchor="middle">
        {'Nature'}
      </text>
    </svg>
  ),
  hamburgerMenu: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="80"
      viewBox="0 0 100 80"
      {...props}
    >
      <rect width="100" height="10" rx="5" fill="currentColor" />
      <rect y="35" width="100" height="10" rx="5" fill="currentColor" />
      <rect y="70" width="100" height="10" rx="5" fill="currentColor" />
    </svg>
  ),
  close: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <circle cx="15" cy="15" r="14" stroke="currentColor" strokeWidth="2" />
      <line
        x1="9"
        y1="9"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="9"
        y1="21"
        x2="21"
        y2="9"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  GitHub: (props: SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  ),
  arrowTop: (props: SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path>
    </svg>
  ),
};
