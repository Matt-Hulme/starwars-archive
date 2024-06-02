import { Link, Typography } from '@mui/material'

interface DetailsHeaderPanelProps {
  classNames?: string
  panelContent?: {
    heading: string
    content: string
    href?: string
  }[]
}

export const DetailsHeaderPanel = ({
  classNames,
  panelContent,
}: DetailsHeaderPanelProps) => (
  <div
    className={`flex-row flex-wrap gap-6 inline-flex relative md:right-10 px-7 py-3 rounded-lg md:rounded-full md:flex-nowrap ${classNames}`}
  >
    {panelContent?.map(
      (item, index) =>
        item?.content && (
          <div key={index}>
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
        ),
    )}
  </div>
)
