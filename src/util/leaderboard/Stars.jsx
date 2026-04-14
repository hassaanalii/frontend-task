export default function Stars({ count }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "opacity-100" : "opacity-25"}>
          ★
        </span>
      ))}
    </span>
  );
}
