import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  title: string
  description: string
  href?: string
  image?: string
  className?: string
}

export default function Card({ title, description, href, image, className = '' }: CardProps) {
  const content = (
    <div
      className={`glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {image && (
        <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}
