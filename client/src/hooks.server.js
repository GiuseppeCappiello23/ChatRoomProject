import env from "dotenv"
import PocketBase from "pocketbase"

env.config()

const ENV = process.env.ENV
const uri = ENV == "container" ? "http://pocketbase:8090" : "http://localhost:8090"

export const handle = async ({ event, resolve }) => {

    event.locals.pb = new PocketBase(uri)
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || '')

    if(event.locals.pb.authStore.isValid) {
        event.locals.user = structuredClone(event.locals.pb.authStore.model)
        if(!event.locals.user.rooms) event.locals.user.rooms = [] 
        // let str = 'createdBy = "' + event.locals.user.id + '"';
        // let rooms = await event.locals.pb.collection('rooms').getList(1, 100, {
        //     filter: str
        // })
        // event.locals.user.rooms = rooms
    } else {
        event.locals.user = undefined
    }

    const response = await resolve(event)

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure : false }))

    return response;

}