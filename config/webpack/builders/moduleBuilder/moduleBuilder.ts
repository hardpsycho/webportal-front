import { ModuleOptions } from 'webpack'

import { ConfigOptions } from '../../types'
import { tsLoader } from './loaders/tsLoader'
import { styleLoader } from './loaders/styleLoader'
import { svgLoader } from './loaders/svgLoader'
import { svgInlineLoader } from './loaders/svgInlineLoader'

export function moduleBuilder(configOption: ConfigOptions): ModuleOptions {
    const tsLoaderRule = tsLoader(configOption.isDev)
    const styleLoadersRule = styleLoader(configOption.isDev)
    const svgLoaderRule = svgLoader()
    const svgInlineLoaderRule = svgInlineLoader()

    return {
        rules: [tsLoaderRule, styleLoadersRule, svgLoaderRule, svgInlineLoaderRule]
    }
}
