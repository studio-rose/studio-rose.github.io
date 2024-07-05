
export async function load({ params }) {
    const character_data = await import(`$lib/character_data/${params.character}.json`)
    const markdown_data = await import(`$lib/character_markdown/${character_data.id}.md?raw`).then((d) => d.default, (_) => "Under construction");
    const markdown_overview = await import(`$lib/character_overview/${character_data.id}.md?raw`).then((d) => d.default, (_) => "Under construction");
    const markdown_history = await import(`$lib/character_history/${character_data.id}.md?raw`).then((d) => d.default, (_) => "Under construction");
    const character_gallery = await import(`$lib/character_gallery/${params.character}.json`).then((d) => d.default, (_) => new Map());

    return {
        character: character_data,
        markdown: markdown_data,
        history: markdown_history,
        overview: markdown_overview,
        gallery: character_gallery
    };
}

export const prerender = true;