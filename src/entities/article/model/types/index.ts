export interface Article {
    id: number
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    tags: string[]
    blocks: ArticleBlock[]
}

const enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE'
}

interface ArticleBlockBase {
    type: ArticleBlockType
    id: number
}

interface ArticleBlockBaseImage extends ArticleBlockBase {
    src: string
    title: string
}

interface ArticleBlockBaseCode extends ArticleBlockBase {
    code: string
}

interface ArticleBlockBaseText extends ArticleBlockBase {
    title: string
    paragraphs: string
}

type ArticleBlock = ArticleBlockBaseImage | ArticleBlockBaseCode | ArticleBlockBaseText
