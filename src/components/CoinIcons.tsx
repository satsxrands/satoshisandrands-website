// Custom SVG coin icons — brand icon system
// All icons use a 32×32 viewBox, sized via the `size` prop

export function BtcIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" fill="#F7931A" fillOpacity="0.1" stroke="#F7931A" strokeWidth="1.2" />
      <line x1="13" y1="8.5" x2="13" y2="23.5" stroke="#F7931A" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 8.5 h4.5 a3.5 3 0 0 1 0 7 h-4.5" stroke="#F7931A" strokeWidth="1.7" fill="none" strokeLinejoin="round" />
      <path d="M13 15.5 h5 a4 3.5 0 0 1 0 8 h-5" stroke="#F7931A" strokeWidth="1.7" fill="none" strokeLinejoin="round" />
      <line x1="11.5" y1="7" x2="14.5" y2="7" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="11.5" y1="25" x2="14.5" y2="25" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function EthIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,3 27,16 16,20" fill="#627EEA" fillOpacity="0.85" />
      <polygon points="16,3 5,16 16,20" fill="#627EEA" fillOpacity="0.45" />
      <polygon points="16,20 27,16 16,29" fill="#627EEA" fillOpacity="0.55" />
      <polygon points="16,20 5,16 16,29" fill="#627EEA" fillOpacity="0.28" />
    </svg>
  );
}

export function SolIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5,10 L24,10 L27,14 L8,14 Z" fill="#9945FF" />
      <path d="M5,17 L24,17 L27,21 L8,21 Z" fill="#9945FF" fillOpacity="0.6" />
      <path d="M5,24 L24,24 L27,28 L8,28 Z" fill="#9945FF" fillOpacity="0.3" />
    </svg>
  );
}

export function XrpIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5,5 C8,12 24,20 27,27" stroke="#00AAE4" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <path d="M27,5 C24,12 8,20 5,27" stroke="#00AAE4" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2.2" fill="#0D0D0D" />
      <circle cx="16" cy="16" r="2.2" fill="#00AAE4" />
    </svg>
  );
}

export function BnbIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Centre */}
      <path d="M16,12.5 L19.5,16 L16,19.5 L12.5,16 Z" fill="#F3BA2F" />
      {/* North */}
      <path d="M16,3 L19.5,6.5 L16,10 L12.5,6.5 Z" fill="#F3BA2F" />
      {/* South */}
      <path d="M16,22 L19.5,25.5 L16,29 L12.5,25.5 Z" fill="#F3BA2F" />
      {/* West */}
      <path d="M3,16 L6.5,12.5 L10,16 L6.5,19.5 Z" fill="#F3BA2F" />
      {/* East */}
      <path d="M22,16 L25.5,12.5 L29,16 L25.5,19.5 Z" fill="#F3BA2F" />
    </svg>
  );
}
