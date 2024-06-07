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
      'gap-3 px-7 py-3 relative rounded-lg self-start w-full lg:w-auto lg:flex-row lg:inline-flex lg:right-10 lg:rounded-small',
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
              className="flex flex-col gap-3 lg:flex-row lg:inline-flex"
              key={index}
            >
              <div className="flex flex-row gap-2 items-center justify-between lg:flex-col lg:gap-0 lg:items-start">
                <Typography className="line-clamp-1" variant="h6">
                  {item?.heading}
                </Typography>
                <Divider
                  className={classNames('grow lg:hidden', {
                    'bg-[#39302e]': variant === 'light',
                    'bg-[#ffbe00]': variant === 'dark',
                  })}
                />
                {item?.href ? (
                  <Link
                    href={item?.href}
                    sx={{
                      color: '#ffffff',
                      '&:hover': {
                        color: 'inherit',
                      },
                      WebkitLineClamp: 1,
                    }}
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
                  className={classNames(
                    'hidden lg:block lg:h-full lg:w-[2px]',
                    {
                      'bg-[#39302e]': variant === 'light',
                      'bg-[#ffbe00]': variant === 'dark',
                    },
                  )}
                />
              )}
            </div>
          ),
      )}
  </div>
)
