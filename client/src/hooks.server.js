import env from "dotenv"
import PocketBase from "pocketbase"

env.config()

const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

export const handle = async ({ event, resolve }) => {
    event.locals.pb = new PocketBase("http://pocketbase:8090")
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || '')

    if(event.locals.pb.authStore.isValid) {
        event.locals.user = structuredClone(event.locals.pb.authStore.model)
    } else {
        event.locals.user = undefined
    }

    const response = await resolve(event)

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure : false }))

    return response;

}