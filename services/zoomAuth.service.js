import ApiError from "../exeptions/api.error.js";
import { generateSignature, getZakToken } from "../api/axios.js"; 

class ZoomAuthsService {
    async getZoomAccessToken(code) {
        if (!code) {
            throw ApiError.BadRequest('The code is required verify field');
        }

        const token = await getAccessToken(code);
        if (!token) {
            throw ApiError.BadRequest('Api query is failed');
        }

        return token;
    }

    async getZoomSDKSignature(meetingNumber) {
        const signature = await generateSignature(meetingNumber);
        if (!signature) {
            throw ApiError.BadRequest('Signature query is failed');
        }

        return signature
    }

    async getZAKTokenFromZommApi () {
        const ZAKToken = await getZakToken();
        if (!ZAKToken) {
            throw ApiError.BadRequest('ZAK Token query is failed');
        }

        return ZAKToken;
    }
}

export default new ZoomAuthsService()