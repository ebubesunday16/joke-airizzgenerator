import keywordData from './keywordContent1.json'

export interface keywordContentType {
    [key: string]: {
        heroText: string
        metaDescription: string
    }

}

export const keywordContent: keywordContentType = keywordData as keywordContentType