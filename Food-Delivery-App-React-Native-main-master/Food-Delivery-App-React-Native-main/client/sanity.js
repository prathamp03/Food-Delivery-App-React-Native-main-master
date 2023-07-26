import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: '4x9kxdi8',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',


})
const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client; 

// sanity cors add http://localhost:3000