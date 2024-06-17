
export async function entries() {
    const routes = await import.meta.glob("$lib/character_data/*.json");
    const routesList = Object.keys(routes);
    return routesList.map(k => ({character: k.split('/').slice(-1)[0].replace(".json", "")}));
}

export const prerender = true;
