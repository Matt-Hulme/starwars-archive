interface DetailsHeaderProps {
  image: string
  name: string
}

export const DetailsHeader = ({ image, name }: DetailsHeaderProps) => {
  return (
    <header className="w-[400px] h-400px object-contain">
      <img className="rounded-full" alt={name ?? ''} src={image} />
    </header>
  )
}
