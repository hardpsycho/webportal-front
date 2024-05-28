import { RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function styleLoader(isDev: boolean): RuleSetRule {
    return {
        test: /\.s?[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: isDev
                            ? '[path]/[local]__[hash:base64:3]'
                            : '[hash:base64:6]',
                        auto: /\.(module|m)\.\w+$/i, // коротакая запись модулей можно .module. или .m.
                        // in Components camelCase, but in scss and css with dash
                        exportLocalsConvention: 'camelCase'
                    }
                }
            },
            // Compiles Sass to CSS
            'sass-loader'
        ]
    }
}
