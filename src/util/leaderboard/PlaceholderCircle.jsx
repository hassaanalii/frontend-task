export default function PlaceholderCircle({ rank }) {
  const border = rank === 2 ? "border-black" : "border-orange-500";
  return (
    <span
      className={`flex size-10 shrink-0 items-center justify-center rounded-full border-2 bg-sky-200 ${border}`}
      aria-hidden
    />
  );
}
