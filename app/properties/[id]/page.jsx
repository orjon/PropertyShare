import connectDB from '@/config/database'
import Property from '@/models/Property'

import PropertyHeaderImage from '@/app/components/PropertyHeaderImage'

const PropertyPage = async ({ params }) => {
  await connectDB()
  const { id } = await params
  const property = await Property.findById(id).lean()

  if (!property) {
    return <div>Property not found</div>
  }

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <h1>Property Page: {property.name}</h1>
      </section>
    </>
  )
}

export default PropertyPage
