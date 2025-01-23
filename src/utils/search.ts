import { navigation } from '../data/navigation';

export interface SearchResult {
  title: string;
  description: string;
  href: string;
  content?: string;
  section: string;
}

// Index of all searchable content
export const searchIndex: SearchResult[] = navigation.flatMap(section => 
  section.items.map(item => ({
    title: item.title,
    description: item.description || '',
    href: item.href,
    section: section.title
  }))
);

// Search function
export function searchDocumentation(query: string): SearchResult[] {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  return searchIndex
    .map(item => {
      const searchableText = `${item.title} ${item.description} ${item.section}`.toLowerCase();
      
      // Calculate relevance score
      const score = searchTerms.reduce((acc, term) => {
        const matches = (searchableText.match(new RegExp(term, 'g')) || []).length;
        return acc + matches;
      }, 0);
      
      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
}
