import ColorModeSwitch from "./color-mode-switch";

export default function Navbar() {
  return (
    <div className="p-4 px-8 border-b border-black/50 dark:border-white/50 flex justify-between items-center">
      <p className="text-2xl font-bold">
        <a href="/">rblx.valbuilds.xyz</a>
      </p>
      <ColorModeSwitch />
    </div>
  );
}
