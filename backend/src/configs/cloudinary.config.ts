import { v2 as cloudinary } from 'cloudinary';

const CLOUDINARY_URL=process.env.CLOUDINARY_URL || 'cloudinary://755854711686163:06ZrxusYdmFfp-2cGbGC5hJwjQ8@diqd4bcyt'
const CLOUDINARY_CLOUD_NAME=process.env.CLOUDINARY_CLOUD_NAME || 'diqd4bcyt'
const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY || '755854711686163'
const CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET || '06ZrxusYdmFfp-2cGbGC5hJwjQ8'

export const configCloudinary = () => {
    cloudinary.config({
        cloud_name: CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_API_KEY,
        api_secret:CLOUDINARY_API_SECRET,
    });

    return cloudinary;
}

