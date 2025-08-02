export default function AdoptionHub() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ species: '', age: '' });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Find Your New Friend</h1>
        
        <SearchFilter 
          filters={[
            { label: 'Species', options: ['Dog', 'Cat', 'Bird'] },
            { label: 'Age', options: ['Puppy', 'Adult', 'Senior'] }
          ]}
          onFilterChange={setFilters}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {pets.map(pet => (
            <PetCard 
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              age={pet.age}
              image={pet.image}
              link={`/adoption-exchange/${pet.id}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}