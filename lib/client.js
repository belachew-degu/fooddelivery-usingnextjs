import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "b7qca5du",
  dataset: "123",
  apiVersion: "2023-01-01",
  useCdn: true,
  token:  "sklGiUGGcJI0P2uOJVx3OLLJUqHIMHlpf3toFEuESeWuwSeUaQ0I4qgCkMsI78Ph6c0YTHYL35a17CVcVW9wi7mbioMLpJBp2aH4kLdytzrodYOe4Ed36myII52SOxIh7SMp1ZZmTH64EzfTThhIylEMhqh1U5v5zal2lXhd9TVw3tQ3W2Vr",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
