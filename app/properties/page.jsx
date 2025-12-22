import PropertyCard from '@/app/components/PropertyCard'
import connectDB from '@/config/database'
import Property from '@/models/Property'

const PropertiesPage = async () => {
  await connectDB()
  const properties = await Property.find({}).lean()

  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto PX-4 PY-6'>
        {!properties.length ? (
          <p>No properties found</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertiesPage
