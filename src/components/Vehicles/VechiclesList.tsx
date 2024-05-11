import { ArrowBack } from "@mui/icons-material"
import { Button } from "@mui/material"

export const VehiclesList = () => {

  return (
    <div className="bg-fit bg-star-background flex flex-col pt-16">
      <div className="h-[calc(100vh-64px)] bg-black-100 w-full p-5">
        <div className="pl-5 pt-5">
          <Button 
            onClick={() => history.back()} 
            size='large' 
            startIcon={<ArrowBack />}
            sx={{ backgroundColor: 'grey', color: '#FFBE00B3' }}
            variant="text" 
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  )
}