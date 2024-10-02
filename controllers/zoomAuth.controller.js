import zoomAuthService from "../services/zoomAuth.service.js";

class ZoomAuthController {
    async authToZoomSessionsApi(req, res, next) {
        try {
            const token = await zoomAuthService.getZoomAccessToken(code);
            return res.json({ token });
        }
        catch (error) {
            next(error);
        }
    }

    async signatureToZoomSDKApi(req, res, next) {
        try {
            const meetingNumber = req.query.meeting_number;

            const signature = await zoomAuthService.getZoomSDKSignature(meetingNumber);
            return res.json({ signature })
        }
        catch (error) {
            next(error)
        }
    }

    async ZAKZommTokenToSDKApi (req, res, next) {
        try {
            const ZAKToken = await zoomAuthService.getZAKTokenFromZommApi();
            return res.json({ ZAKToken })
        }
        catch (error) {
            next(error)
        }
    }
}

export default new ZoomAuthController();