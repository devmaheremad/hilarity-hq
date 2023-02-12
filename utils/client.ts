import sanityClient from "@sanity/client";

export const client = sanityClient({
	projectId: "3ghc09b4",
	dataset: "production",
	apiVersion: "2023-02-07",
	useCdn: false,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
	ignoreBrowserTokenWarning: true,
});
