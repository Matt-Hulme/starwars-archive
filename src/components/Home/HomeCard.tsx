import { Card, CardContent, Typography } from "@mui/material"

interface HomeCardProps {
    title: string
}

export const HomeCard = ({title}: HomeCardProps) => (
    <Card className="h-full border-solid border-2 border-[#ffbe00]">
        <CardContent sx={{ padding: '3px' }} className="bg-transparent h-full">
            <div className="hidden lg:block">
                <Typography variant="h5" className='text-[#ffbe00]'>{title}</Typography>
            </div>
            <div className="block lg:hidden">
                <Typography variant="h4" className='text-[#ffbe00]'>{title}</Typography>
            </div>
        </CardContent>
    </Card>
)