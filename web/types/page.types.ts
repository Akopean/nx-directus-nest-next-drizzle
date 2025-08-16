export interface Page {
  id: number;
  title: string;
  translations: Array<{
    id: number;
    slug: string;
    [key: string]: any;
  }>;
  [key: string]: any;
}