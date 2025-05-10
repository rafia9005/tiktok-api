import { Hono } from "hono";
import Tiktok from "@tobyg74/tiktok-api-dl"

export const tiktokController = new Hono()

tiktokController.get('/tiktok/video', async (c) => {
    const url = c.req.query('url') as string

    if (!url) {
        return c.json({ error: "Missing 'url' query parameter" }, 400)
    }

    try {
        const response = await Tiktok.Downloader(url, {
            version: "v3",
            showOriginalResponse: true
        })

        console.log(response)

        return c.json(response)
    } catch (err) {
        console.error(err)
        return c.json({ error: "Failed to download TikTok video" }, 500)
    }
})