export async function load({ params }) {
    const character_gallery = await import(`$lib/character_gallery/${params.character}.json`).then((d) => d.default, (_) => new Map());
    const image_paths = Object.values(character_gallery);
    const image_data = image_paths.map((v) => import(`$lib/character_images/${v.path}.png`));
    const resolved_image_data = await Promise.all(image_data);

    return {
        gallery: character_gallery,
        image_data: resolved_image_data,
    };
}