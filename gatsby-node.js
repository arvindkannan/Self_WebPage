import { resolve as _resolve } from "path"

export function onCreateWebpackConfig({ actions }) {
    actions.setWebpackConfig({
        resolve: {
            modules: [_resolve(__dirname, "src"), "node_modules"],
        },
    })
}
