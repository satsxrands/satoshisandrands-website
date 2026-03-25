// Custom SVG icons for the three tax tools
// Each icon uses its tool's brand color and a 32×32 viewBox

export function CgtIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="18" width="6" height="10" rx="1.5" fill="#F5A623" opacity="0.4" />
      <rect x="13" y="12" width="6" height="16" rx="1.5" fill="#F5A623" opacity="0.65" />
      <rect x="22" y="6" width="6" height="22" rx="1.5" fill="#F5A623" />
      <path d="M4 28h24" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M22 4l4 4-4 4" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClassifierIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="7" r="3" fill="#06D6A0" />
      <path d="M16 10v5" stroke="#06D6A0" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 15 L8 23" stroke="#06D6A0" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M16 15 L24 23" stroke="#06D6A0" strokeWidth="2" strokeLinecap="round" />
      <circle cx="8" cy="25" r="2.5" fill="#06D6A0" opacity="0.35" />
      <circle cx="24" cy="25" r="2.5" fill="#06D6A0" />
    </svg>
  );
}

export function CarfIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 3 L27 7.5V16c0 5.5-4.5 9.5-11 11C9.5 25.5 5 21.5 5 16V7.5L16 3Z"
        fill="#EF233C"
        opacity="0.15"
        stroke="#EF233C"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line x1="11" y1="13" x2="21" y2="13" stroke="#EF233C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="17" x2="18" y2="17" stroke="#EF233C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="11" y1="21" x2="15" y2="21" stroke="#EF233C" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <circle cx="23" cy="22" r="4" fill="#1C1C1C" />
      <circle cx="23" cy="22" r="4" fill="#EF233C" opacity="0.2" stroke="#EF233C" strokeWidth="1.2" />
      <circle cx="23" cy="22" r="1.8" fill="#EF233C" />
    </svg>
  );
}
