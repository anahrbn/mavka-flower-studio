type WiltedFlowerProps = {
  className?: string;
};

const petal = 'M0 0 C -5 5, -5 13, 0 17 C 5 13, 5 5, 0 0 Z';

export function WiltedFlower({ className }: WiltedFlowerProps) {
  return (
    <svg
      viewBox="0 0 160 150"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <ellipse cx="86" cy="138" rx="50" ry="5" className="fill-sage-mist" />
      <path
        d="M64 136 C 60 100, 62 62, 84 44 C 100 32, 118 38, 120 56"
        className="stroke-olive"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M63 100 C 50 96, 40 104, 36 116 C 48 116, 58 110, 63 100 Z"
        className="fill-olive"
        opacity="0.85"
      />
      <path
        d="M120 62 C 110 70, 108 86, 118 92 C 128 86, 130 70, 120 62 Z"
        transform="rotate(28 120 62)"
        className="fill-dusty-rose"
      />
      <path
        d="M120 62 C 110 70, 108 86, 118 92 C 128 86, 130 70, 120 62 Z"
        transform="rotate(-24 120 62)"
        className="fill-dusty-rose"
      />
      <path
        d="M120 62 C 110 70, 110 88, 120 94 C 130 88, 130 70, 120 62 Z"
        className="fill-peach"
      />
      <path
        d="M114 58 C 116 54, 124 54, 126 58 C 122 62, 118 62, 114 58 Z"
        className="fill-olive"
      />
      <circle cx="120" cy="63" r="4.5" className="fill-terracotta" />
      <path
        d={petal}
        transform="translate(136 96) rotate(40)"
        className="fill-dusty-rose"
      />
      <path
        d={petal}
        transform="translate(108 108) rotate(-60)"
        className="fill-peach"
      />
      <path
        d={petal}
        transform="translate(118 134) rotate(-84)"
        className="fill-dusty-rose"
      />
    </svg>
  );
}
