import { useParams } from "react-router-dom"

export default function HotelPage() {
  const {id} = useParams()
  console.log(id)
    return (
      <h1 className="text-3xl font-bold underline">
        {id}
      </h1>
    )
  }