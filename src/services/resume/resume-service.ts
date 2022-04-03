import axios from "axios";
import { SendResumeRequest } from "../../contracts/resume";
import { API_URL } from "../../utils/constants";

export class ResumeService {
    
    public async sendResume(request: SendResumeRequest) {
        return axios.post(`${API_URL}/Resume`, request);
    }

}