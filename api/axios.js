import axios from "axios";
import crypto from "crypto";
import jwt from 'jsonwebtoken'
import { KJUR } from "jsrsasign";

const CLIENT_ID = process.env.ZOOM_CLIENT_ID;
const CLIENT_SECRET = process.env.ZOOM_CLIENT_SECRET;
const ClIENT_ACCOUNT = process.env.ZOOM_ACCOUNT_ID;
const REDIRECT_LINK = process.env.ZOOM_REDIRECT_OAUTH_LINK;

const getAccessToken = async (code) => {
    const response = await axios.post('https://zoom.us/oauth/token', null, {
        params: {
            "grant_type": "account_credentials",
            "account_id": ClIENT_ACCOUNT,
            redirect_uri: REDIRECT_LINK,
        },
        headers: {
            'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    return response.data.access_token;
};


const generateSignature = async (meetingNumber, role=0) => {
    const iat = Math.round(new Date().getTime() / 1000) - 30
    const exp = iat + 60 * 60 * 2
    const oHeader = { alg: 'HS256', typ: 'JWT' }

    const payload = {
        sdkKey: CLIENT_ID,
        appKey: CLIENT_ID,
        mn: meetingNumber,
        role: role,
        iat: iat,
        exp: exp,
        tokenExp: exp
    }

    const signature = jwt.sign(payload, CLIENT_SECRET, {
        algorithm: 'HS256',
    })
    return signature
};


const getZakToken = async () => {
    const response = await axios.get('https://api.zoom.us/v2/users/me/token?type=zak', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await getAccessToken()}`
        }
    });

    return await response.data.token
}

const zoomApi = axios.create({
    baseURL: 'https://api.zoom.us/v2/users/me/meetings',
});

const createZoomSession = async (session) => {
    const response = await zoomApi.post('', {
        topic: session.topic,
        type: 2,
        start_time: session.startTime,
        duration: session.duration,
        settings: {
            password: session.password,
            approval_type: 0,
            registration_type: 1
        },
    },{
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`
        }
    });

    return response.data;
};

export {
    createZoomSession,
    getAccessToken,
    generateSignature,
    getZakToken
}