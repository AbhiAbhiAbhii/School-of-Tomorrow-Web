import Image from 'next/image'
import Link from 'next/link'

export default function Icons({item}) {
  return (
    <li key={item.id}>
        <Link target='_blank' href={item.link}>
            <Image src={item.icon} alt='socials' height={34} width={34} />
        </Link>
    </li>
  )
}
