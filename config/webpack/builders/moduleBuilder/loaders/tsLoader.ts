import { RuleSetRule } from 'webpack'
import ReactRefreshTypeScript from 'react-refresh-typescript'

export function tsLoader(isDev: boolean): RuleSetRule {
    return {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: isDev
            ? {
                  getCustomTransformers: () => ({
                      before: [ReactRefreshTypeScript()]
                  })
              }
            : undefined
    }
}
