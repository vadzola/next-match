'use client'

import { Photo } from "@prisma/client"
import { CldImage } from "next-cloudinary"
import { Image } from "@nextui-org/react"

type Props = {
 photo: Photo | null
}

export default function MemberImage({ photo }: Props) {
  return (
    <div>
      {photo?.publicId ? (
        <CldImage
          src={photo.publicId}
          alt='Member profile image'
          width={300}
          height={300}
          crop='fill'
          gravity='faces'
          className='rounded-2xl'
          priority
        />
      ) : (
        <Image
          width={220}
          height={220}
          src={photo?.url || '/images/user.png'}
          alt='Member profile image'
          className='aspect-square object-cover'
        />
      )}
    </div>
  )
}