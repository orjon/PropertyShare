import connectDB from '@/config/database'
import Property from '@/models/Property'

export const GET = async (request, { params }) => {
  const { id } = await params
  try {
    await connectDB()
    const property = await Property.findById(id).lean()
    if (!property) {
      return new Response('Property not found', { status: 404 })
    }
    return new Response(JSON.stringify(property), { status: 200 })
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error fetching properties' }),
      { status: 500 }
    )
  }
}
