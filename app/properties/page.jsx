import Properties from "@/components/Properties";
import PropertyCard from "@/components/PropertyCard";
import PropertySearchForm from "@/components/PropertySearchForm";
import { fetchProperties } from "@/utils/requests";

export default async function PropertiesPage() {
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>

      <Properties />
    </>
  );
}
