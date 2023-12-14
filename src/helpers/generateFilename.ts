import { nanoid } from "nanoid"

export const generateFileName = (originalName: string) => {
  const nameId = nanoid()
  const extension = originalName.split('.').pop()
  return `${nameId}.${extension}`
}