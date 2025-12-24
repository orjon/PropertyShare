'use server'

export const addProperty = async (formData) => {
  const propertyData = {
    name: formData.get('name'),
    type: formData.get('type'),
    description: formData.get('description'),
    location: {
      street: formData.get('location.street'),
      city: formData.get('location.city'),
      state: formData.get('location.state'),
      zipcode: formData.get('location.zipcode')
    },
    beds: formData.get('beds'),
    baths: formData.get('baths'),
    square_feet: formData.get('square_feet'),
    rates: {
      nightly: formData.get('rates.nightly'),
      weekly: formData.get('rates.weekly'),
      monthly: formData.get('rates.monthly')
    },
    seller_info: {
      name: formData.get('seller_info.name'),
      email: formData.get('seller_info.email'),
      phone: formData.get('seller_info.phone')
    },
    amenities: formData.getAll('amenities'),
    images: formData
      .getAll('images')
      .filter((image) => image.name !== '')
      .map((image) => image.name)
  }
  console.log(propertyData)
}

export default addProperty
