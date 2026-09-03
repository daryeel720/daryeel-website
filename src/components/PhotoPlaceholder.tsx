import Image from "next/image";

export default function PhotoPlaceholder({
  aspect = "aspect-square",
  src,
  alt,
}: {
  aspect?: string;
  src?: string;
  alt?: string;
}) {
  if (src) {
    return (
      <div className={`relative ${aspect} overflow-hidden rounded-2xl`}>
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex ${aspect} flex-col items-center justify-center gap-2 rounded-2xl bg-paper-warm`}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="#8a887c"
          strokeWidth="1.6"
        />
        <circle cx="8.5" cy="10" r="1.5" fill="#8a887c" />
        <path
          d="M3 16l5-4 4 3 3-2 6 4"
          stroke="#8a887c"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <p className="text-xs text-ink/45">Photo placeholder</p>
    </div>
  );
}
