export default function Footer() {
  return (
    <div className="p-4 px-8 border-t border-black/50 dark:border-white/50 flex justify-between items-start">
      <div>
        <p className="text-lg">
          Made with ❤️ by{" "}
          <a href="https://valbuilds.xyz" className="hover:underline font-bold">
            valbuilds
          </a>
          . 🏳️‍⚧️ (she/they)
        </p>
        <p>
          This website is open source! View the source code on{" "}
          <a
            href="https://github.com/valbuilds/rblx.valbuilds.xyz"
            className="hover:underline"
          >
            Github
          </a>
          .
        </p>
        <p>This website is in no way affiliated with Roblox.</p>
      </div>
      <div>
        <p className="text-right">
          <a
            href="https://github.com/valbuildr"
            className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white hover:underline"
            target="_blank"
          >
            Github
          </a>
        </p>
        <p className="text-right">
          <a
            href="https://www.youtube.com/@valbuildr"
            className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white hover:underline"
            target="_blank"
          >
            Youtube
          </a>
        </p>
        <p className="text-right">
          <a
            href="https://bsky.app/valbuilds.xyz"
            className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white hover:underline"
            target="_blank"
          >
            Bluesky
          </a>
        </p>
        <p className="text-right">
          <a
            href="https://wetdry.world/@valbuildr"
            className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white hover:underline"
            target="_blank"
          >
            Mastodon
          </a>
        </p>
        <p className="text-right">
          <a
            href="https://discord.gg/UKVMvUG2h9"
            className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white hover:underline"
            target="_blank"
          >
            Discord
          </a>
        </p>
        <p className="text-right">
          <a
            href="https://www.tiktok.com/@valbuildr"
            className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white hover:underline"
            target="_blank"
          >
            TikTok
          </a>
        </p>
      </div>
    </div>
  );
}
