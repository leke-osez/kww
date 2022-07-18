import sanityClient  from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const TOKEN = process.env.SANITY_TOKEN

export const client = sanityClient({
    projectId: '8funxy33',
    dataset:'production',
    useCdn: true,
    token: TOKEN,
    apiVersion: '2022-06-13'
})

const builder = imageUrlBuilder(client)

export const UrlFor = (source)=>builder.image(source)