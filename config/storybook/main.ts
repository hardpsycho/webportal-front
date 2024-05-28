import { styleLoader } from '@config/webpack/builders/moduleBuilder/loaders/styleLoader'
import { svgLoader } from '@config/webpack/builders/moduleBuilder/loaders/svgLoader'
import { resolveBuilder } from '@config/webpack/builders/resolveBuilder'
import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'
import { DefinePlugin, RuleSetRule } from 'webpack'

function isRegExp(reg: RuleSetRule['test']): reg is RegExp {
    if (reg && typeof reg === 'object' && 'test' in reg) {
        return true
    }
    return false
}

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-webpack5-compiler-babel'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    babel: () => {
        return {
            configFile: path.resolve(__dirname, '../babel/.babelrc.json')
        }
    },
    staticDirs: ['../../public'],
    webpackFinal: (config) => {
        // добавляем резолвы как в нашем проекте
        if (config.resolve) {
            config.resolve.modules = resolveBuilder().modules
            config.resolve.alias = { ...config.resolve.alias, ...resolveBuilder().alias }
        }

        // убираем правило для css
        if (config.module?.rules) {
            config.module.rules = config.module.rules.filter((rule) => {
                if (rule && rule !== '...' && isRegExp(rule.test) && rule.test.test('.css')) {
                    return false
                }
                return true
            })
        }

        // убираем правило для svg
        config.module?.rules?.forEach((rule) => {
            if (rule && rule !== '...' && isRegExp(rule.test) && rule.test.test('.svg')) {
                rule.exclude = /\.svg$/
            }
        })

        // правило для scss
        const ruleForScss = styleLoader(true)
        // добавляем свое правило для стилей
        config.module?.rules?.push(ruleForScss)

        // добавляем свое правило для svg
        config.module?.rules?.push(svgLoader())

        //добавляем definePlugin
        config.plugins?.push(
            new DefinePlugin({
                WP_DEV: false,
            })
        )

        return config
    }
}
export default config
