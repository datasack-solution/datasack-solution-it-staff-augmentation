import { EnquiryForm, TechnologyReqData } from "@/components/BookingForm"
import axios from "axios"

export interface ClientRequestData extends EnquiryForm{
    skillsets?:TechnologyReqData
}

interface ClientApi{
     createClient:(client:ClientRequestData)=>Promise<void>
}

class ClientApiService implements ClientApi{
    async createClient(client:ClientRequestData):Promise<void>{
        return await axios.post('https://it-augmentation-server.vercel.app/clients',client)
    }
}

export const clientApiService = new ClientApiService()