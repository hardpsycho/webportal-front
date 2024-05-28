import { RuleSetRule } from 'webpack'

export function svgLoader(): RuleSetRule {
    return {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack']
    }
}
