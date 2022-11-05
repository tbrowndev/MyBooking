import AddOn from "../service/addon"
import Item from "../service/item"
import ClientForm from "./client"

type Appointment = {
  client: ClientForm | undefined
  service: Item | undefined
  addons: AddOn[]
  date: string
  time: string
}

export default Appointment