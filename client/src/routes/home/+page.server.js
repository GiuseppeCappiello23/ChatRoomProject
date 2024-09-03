import { fail } from "@sveltejs/kit"

export const actions = {
    createRoom: async ({ request, locals, response }) => {
        const body = Object.fromEntries(await request.formData())

        try {
            let id = locals.user.id
            const data = {
                roomName: body.roomName,
                createdBy: id,
                partecipants: JSON.stringify([id])
            }
            // console.log(data)
            const record = await locals.pb.collection("rooms").create(data)
            // dopo aver creato la room aggiorniamo lo user inseredo la room nelle room a cui partecipa l'utente

            let rooms = locals.user.rooms
            const userData = {
                roomName: body.roomName,
                id: record.id
            }
            rooms.push(userData)

            // let rooms = JSON.parse(locals.user.rooms)
            // if(!rooms) {
            //     rooms = []
            //     rooms.push(record.id)
            // }

            console.log("DEBUG : ", id, { rooms: JSON.stringify(rooms) })
            
            const update = await locals.pb.collection("users").update(id, { rooms: JSON.stringify(rooms) })
            console.log("update : ", update)
            return { record }
        } catch (error) {
            console.log("Errore : ", JSON.stringify(error))
            return fail(400, { message: "Creazione fallita" })
        }
    }
}