export class DirectusService {
  private baseUrl: string;

  constructor(baseUrl = 'http://localhost:8055') {
    this.baseUrl = baseUrl;
  }

  async fetchPageBySlug(slug: string) {
    const res = await fetch(
      `${this.baseUrl}/items/pages?filter[translations][slug][_eq]=${slug}&fields=*,translations.*,translations.blocks.*`
    );
    if (!res.ok) throw new Error('Network response was not ok');
    const json = await res.json();
    return json.data?.[0] || null;
  }
}
