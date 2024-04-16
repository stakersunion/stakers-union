import { $ } from 'bun'

const bunfigContent = `[install.scopes] 
\"@awesome.me\" = { url = \"https://npm.fontawesome.com/\", token = \"${process.env.FONTAWESOME_NPM_AUTH_TOKEN}\" }
\"@fortawesome\" = { url = \"https://npm.fontawesome.com/\", token = \"${process.env.FONTAWESOME_NPM_AUTH_TOKEN}\" }`

await $`echo "Creating bunfig.toml..."`
await $`rm -f bunfig.toml`
await $`echo ${bunfigContent} > bunfig.toml`
await $`echo "Bunfig created. Running installation..."`
await $`bun i`
await $`echo "Installation complete."`
