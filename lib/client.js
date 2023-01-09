import sanityclient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityclient({
    projectId: '0hyza18h',
    dataset: 'production',
    apiVersion: '2023-10-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);