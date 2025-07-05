import listings from "@/data/Properties.json";

export function getAllListings() {
  return listings;
}

export function getListingBySlug(slug) {
  return (
    listings.find(
      (listing) =>
        listing.Slug.toLowerCase().trim() === slug.toLowerCase().trim()
    ) || null
  );
}
