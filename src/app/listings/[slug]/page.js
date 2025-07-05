// app/listings/[slug]/page.js
import PropertyDetails from "@/components/_LstingPage/listings/slug/PropertyDetails";
import { getListingBySlug, getAllListings } from "@/hooks/getProperties";

export async function generateStaticParams() {
  const listings = getAllListings();
  return listings.map((listing) => ({
    slug: listing.Slug,
  }));
}

export default function ListingPage({ params }) {
  const listing = getListingBySlug(params.slug);

  if (!listing) {
    return <div>Property Not Found</div>;
  }

  return (
    <div>
      <PropertyDetails property={listing} />
    </div>
  );
}
