export default function CommunityMark() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a home, a growing tree, and two hands cupped in support, representing the Daryeel community"
    >
      <style>
        {`
          @media (prefers-reduced-motion: no-preference) {
            .cm-leaf { animation: cm-sway 4s ease-in-out infinite; transform-origin: center; }
            .cm-leaf:nth-child(2) { animation-delay: .3s; }
            .cm-leaf:nth-child(3) { animation-delay: .6s; }
            .cm-leaf:nth-child(4) { animation-delay: .9s; }
            .cm-dot { animation: cm-pulse 2.6s ease-in-out infinite; transform-origin: center; }
            .cm-dot:nth-child(2) { animation-delay: .5s; }
            .cm-dot:nth-child(3) { animation-delay: 1s; }
            .cm-figures { animation: cm-rise 3.2s ease-in-out infinite; }
          }
          @keyframes cm-sway {
            0%, 100% { transform: rotate(0deg) translateY(0); }
            50% { transform: rotate(4deg) translateY(-4px); }
          }
          @keyframes cm-pulse {
            0%, 100% { opacity: .55; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.35); }
          }
          @keyframes cm-rise {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
        `}
      </style>

      {/* growing tree arc, echoing the logo */}
      <path
        d="M300 340 C 330 260, 300 160, 250 90"
        fill="none"
        stroke="#2e7d32"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {[
        [250, 90],
        [268, 108],
        [284, 128],
        [296, 150],
      ].map(([cx, cy], i) => (
        <ellipse
          key={i}
          className="cm-leaf"
          cx={cx}
          cy={cy}
          rx="20"
          ry="12"
          fill={i % 2 === 0 ? "#2e7d32" : "#3f9a46"}
          transform={`rotate(${-30 + i * 12} ${cx} ${cy})`}
        />
      ))}

      {/* roofline */}
      <path
        d="M70 190 L 210 90 L 340 190"
        fill="none"
        stroke="#14366b"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* cupped hands */}
      <path
        d="M60 330 C 60 280, 110 260, 150 275 C 175 284, 195 300, 210 320"
        fill="none"
        stroke="#14366b"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M360 330 C 360 280, 310 260, 270 275 C 245 284, 225 300, 210 320"
        fill="none"
        stroke="#2e7d32"
        strokeWidth="14"
        strokeLinecap="round"
      />

      {/* family figures */}
      <g className="cm-figures">
        <g fill="#14366b">
          <circle cx="115" cy="205" r="16" />
          <rect x="99" y="224" width="32" height="52" rx="14" />
        </g>
        <g fill="#3f9a46">
          <circle cx="210" cy="195" r="19" />
          <rect x="190" y="217" width="40" height="62" rx="16" />
        </g>
        <g fill="#14366b">
          <circle cx="300" cy="205" r="16" />
          <rect x="284" y="224" width="32" height="52" rx="14" />
        </g>
        <g fill="#e6a419">
          <circle cx="163" cy="245" r="11" />
          <rect x="152" y="259" width="22" height="34" rx="10" />
        </g>
        <g fill="#e6a419">
          <circle cx="255" cy="245" r="11" />
          <rect x="244" y="259" width="22" height="34" rx="10" />
        </g>
      </g>

      {/* maple accent marks */}
      <g fill="#cf2027">
        <circle className="cm-dot" cx="48" cy="70" r="5" />
        <circle className="cm-dot" cx="372" cy="70" r="5" />
        <circle className="cm-dot" cx="210" cy="365" r="5" />
      </g>
    </svg>
  );
}
