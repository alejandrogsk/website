import { ReactElement } from "react"

const LayoutX = ({children}:{children:ReactElement}) => {

    return(
      <div className="grid grid-cols-1 max-w-[95%] md:max-w-[80%] mx-auto">
  {children}
      </div>
    )
  }

export default LayoutX;