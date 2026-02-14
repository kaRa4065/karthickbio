export default function Buttons({ text }) {
  return (
    <a
      href="#footer"
      className="inline-flex items-center justify-center bg-primary-bgbutton hover:bg-blue-600 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors"
    >
      {text}
    </a>
  );
}
