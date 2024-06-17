
export async function load({ params }) {
    return {
        character: await import(`$lib/character_data/${params.character}.json`)
    };
}

export const prerender = true;