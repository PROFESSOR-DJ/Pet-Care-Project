export default function HomePage() {
  return (
    <Layout>
      <Hero 
        title="Premium Care for Your Furry Friends"
        subtitle="All pet services in one place"
        cta="Explore Services"
      />
      
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            icon="🐶" 
            title="Pet Care Centers"
            description="Daycare, boarding & grooming"
            link="/care-centers"
          />
          {/* Repeat for Adoption, Vet, etc. */}
        </div>
      </section>
      
      <FeatureGrid features={[
        {title: "Adopt", desc: "Find your new companion"},
        {title: "Vet Care", desc: "Expert medical services"},
        {title: "Pet Supplies", desc: "Quality food & accessories"}
      ]} />
    </Layout>
  );
}