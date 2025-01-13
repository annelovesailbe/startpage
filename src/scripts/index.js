import { injectBookmarks } from "./bookmarks.js"
import { updateVariant } from "./variants.js"

const bookmarks = [
  {
    label: "social",
    items: {
      "reddit": "https://www.reddit.com",
      "spacehey": "https://spacehey.com",
      "pinterest": "https://www.pinterest.com/",
      "strawpage": "https://straw.page/draw",
    },
  },
  {
    label: "general",
    items: {
      "youtube": "https://www.youtube.com/",
      "gmail": "https://mail.google.com/mail/u/0/#inbox",
      "icloud": "https://www.icloud.com/mail/",
      "roblox": "https://www.roblox.com/home",
    },
  },
  {
    label: "techy",
    items: {
      aur: "https://aur.archlinux.org/",
      githubdown: "https://download-directory.github.io/",
    },
  },
  {
    label: "resources",
    items: {
      "react > bulletproof": "https://github.com/alan2207/bulletproof-react",
      "js > patterns": "https://www.patterns.dev/#patterns",
    },
  },
]

injectBookmarks(bookmarks)

// Select a random variant
updateVariant()
// Or set a static variant
// updateVariant("momo-1")

// For debugging
/*
function iterateVariants() {
  updateVariant()
  setTimeout(iterateVariants, 5000)
}
iterateVariants()
*/
