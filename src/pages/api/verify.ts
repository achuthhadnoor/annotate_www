import { NextApiRequest, NextApiResponse } from 'next'
import { createUser, readUserFromSupabase, updatedUser } from './supabase' // Import from sepabase.ts

type User = {
  email: string
  license?: string
  hostname?: string
}

const isValidlicense = (license: any) => {
  return true
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, license, hostname } = req.body as User

  // Check for  email
  if (!email) {
    return res
      .status(400)
      .json({ isValid: false, message: 'Email is required' })
  }

  // Check for license
  if (!license) {
    return res
      .status(400)
      .json({ isValid: false, message: 'License is required' })
  }

  // Validate license
  if (!isValidlicense(license)) {
    return res
      .status(400)
      .json({ isValid: false, message: 'License is invalid' })
  }

  // Read User from DB
  const { data: existingUsers, error } = await readUserFromSupabase(
    email,
    license
  )

  if (error) {
    console.error('Error fetching user:', error)
    return res
      .status(500)
      .json({ isValid: false, message: 'Opps! Something went wrong!' })
  }

  const userExists = existingUsers.length > 0

  // New users
  if (!userExists) {
    try {
      createUser({ email, license, hostname })
      return res
        .status(200)
        .json({ isValid: true, message: 'Yayy!!! verified' })
    } catch (error) {
      return res
        .status(500)
        .json({ isValid: false, message: JSON.stringify(error) })
    }
  }

  const user = existingUsers[0]
  // Update user without hostname
  if (!user.hostname) {
    try {
      updatedUser(user)
      return res
        .status(200)
        .json({ isValid: true, message: 'Yayy!!! verified' })
    } catch (error) {
      return res
        .status(500)
        .json({ isValid: false, message: JSON.stringify(error) })
    }
  }

  return res.status(200).json({ isValid: true, message: 'Yayy!!! verified' })
}
