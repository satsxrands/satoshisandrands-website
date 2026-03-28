'use client';

import { useState, useRef, useEffect } from 'react';

interface ShareButtonProps {
  title: string;
  slug?: string;
  url?: string;
}

export function ShareButton({ title, slug, url: providedUrl }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const url = providedUrl || (typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : `https://satoshisandrands.com/blog/${slug}`);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  const shareOptions = [
    {
      name: 'X',
      icon: '𝕏',
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=crypto,tax,SACrypto`,
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      name: 'Facebook',
      icon: 'f',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  return (
    <div ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Share icon button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px 8px',
          color: 'var(--muted)',
          transition: 'color 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
        title="Share article"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9.5v3.5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-3.5M5 7l3-3 3 3M8 2v7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: '100%',
            marginTop: 8,
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            minWidth: 140,
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}
        >
          {shareOptions.map((option) => (
            <a
              key={option.name}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 14px',
                color: 'var(--white)',
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 600,
                fontFamily: 'var(--font-nunito), sans-serif',
                borderBottom: '1px solid var(--border)',
                transition: 'background 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(245,166,35,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <span style={{ fontSize: 16, width: 20, display: 'flex', justifyContent: 'center' }}>
                {option.icon}
              </span>
              {option.name}
            </a>
          ))}

          {/* Copy link option */}
          <button
            onClick={handleCopyLink}
            style={{
              width: '100%',
              padding: '10px 14px',
              background: 'none',
              border: 'none',
              color: 'var(--white)',
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 600,
              fontFamily: 'var(--font-nunito), sans-serif',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(245,166,35,0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <span style={{ fontSize: 16, width: 20, display: 'flex', justifyContent: 'center' }}>
              {copied ? '✓' : '🔗'}
            </span>
            {copied ? 'Copied!' : 'Copy link'}
          </button>
        </div>
      )}
    </div>
  );
}
