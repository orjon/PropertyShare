'use server'

import connectDB from '@/config/database'
import Property from '@/models/Property'
import { getSessionUser } from '@/utils/getSessionUser'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const addProperty = async (formData) => {
  await connectDB()
  const sessionUser = await getSessionUser()
  if (!sessionUser || !sessionUser.userId) {
    throw new Error('User ID is required')
    // redirect('/api/auth/signin')
  }

  const { userId: owner } = sessionUser

  const propertyData = {
    owner,
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
      .filter((image) => image.name)
      .map((image) => image.name)
  }

  const newProperty = new Property(propertyData)
  await newProperty.save()

  revalidatePath('/', 'layout')
  redirect(`/properties/${newProperty._id}`)
}

export default addProperty
