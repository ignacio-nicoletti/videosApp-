import { RequestHandler } from "express"
import video from "./Video"





export const createVideo: RequestHandler = async (req, res) => {
    console.log(req.body);

    // const video = new Video(req.body)
    // const savedVideo = await video.save()


    // res.json(video)
}


export const getVideos: RequestHandler = (req, res) => {

    res.json('obtener videos id')
}


export const updateVideo: RequestHandler = (req, res) => {

    res.json('update videos')
}
export const deleteVideo: RequestHandler = (req, res) => {

    res.json('delete videos')
}

