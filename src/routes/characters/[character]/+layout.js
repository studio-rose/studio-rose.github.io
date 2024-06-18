
export async function load({ params }) {
    const character_data = await import(`$lib/character_data/${params.character}.json`)
    const markdown_data = await import(`$lib/character_markdown/${character_data.id}.md?raw`)

    return {
        character: character_data,
        markdown: markdown_data
    };
}

export const prerender = true;