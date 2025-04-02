import { JokeArray } from "@/data/jokes";

export const slugify = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');
  };


export const getJokeTotalKeyword = () => {
    const keywordArray = [...new Set(
        JokeArray.map((item) => item.keyword.replace('-', ' '))
    )]
    return keywordArray
}

export const toTitleCase = (str: string) => {
    return str
      .toLowerCase()
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .replace(/\b\w/g, (match) => match.toUpperCase()); // Capitalize each word
  };