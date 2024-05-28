import { RuleSetRule } from 'webpack'

export function svgInlineLoader(): RuleSetRule {
    return {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/ // *.svg?url
    }
}
