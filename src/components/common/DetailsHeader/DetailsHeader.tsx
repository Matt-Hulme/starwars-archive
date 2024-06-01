interface DetailsHeaderProps {
  classNames?: string
  image: string
  name: string
}

export const DetailsHeader = ({
  classNames,
  image,
  name,
}: DetailsHeaderProps) => {
  return (
    <header>
      <div className={`overflow-hidden relative ${classNames}`}>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt={name ?? ''}
          src={image}
        />
      </div>
    </header>
  )
}
