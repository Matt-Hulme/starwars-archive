import { Divider, Link, Typography } from '@mui/material'
import classNames from 'classnames'

interface DetailsHeaderPanelProps {
  panelContent?: {
    heading: string
    content: string
    href?: string
  }[]
  variant: string
}

export const DetailsHeaderPanel = ({
  panelContent,
  variant,
}: DetailsHeaderPanelProps) => (
  <div
    className={classNames(
      'gap-6 px-7 py-3 relative rounded-lg self-start w-full md:w-auto md:flex-row md:inline-flex md:right-10 md:rounded-full',
      {
        'bg-[#ffbe00] text-[#39302e]': variant === 'light',
        'bg-[#39302e] text-[#ffbe00]': variant === 'dark',
      },
    )}
  >
    {panelContent
      ?.filter((item) => item?.content !== 'N A')
      .map(
        (item, index, array) =>
          item?.content && (
            <div
              key={index}
              className="flex flex-col gap-3 md:flex-row md:inline-flex"
            >
              <div className="flex flex-row items-center justify-between md:flex-col md:items-start">
                <Typography className="line-clamp-1" variant="h6">
                  {item?.heading}
                </Typography>
                {item?.href ? (
                  <Link
                    sx={{
                      color: '#ffffff',
                      '&:hover': {
                        color: 'inherit',
                      },
                      WebkitLineClamp: 1,
                    }}
                    href={item?.href}
                    underline="none"
                  >
                    {item?.content}
                  </Link>
                ) : (
                  <Typography className="line-clamp-1" variant="body1">
                    {item?.content}
                  </Typography>
                )}
              </div>
              {index < array.length - 1 && array[index + 1]?.content && (
                <Divider
                  className={classNames('h-[2px] w-full md:h-full md:w-[2px]', {
                    'bg-[#39302e]': variant === 'light',
                    'bg-[#ffbe00]': variant === 'dark',
                  })}
                />
              )}
            </div>
          ),
      )}
  </div>
)
