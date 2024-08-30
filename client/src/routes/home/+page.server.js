import { fail } from "@sveltejs/kit"

export const actions = {
    createRoom: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())

        try {
            let id = locals.user.id
            const data = {
                roomName: body.roomName,
                createdBy: id
            }
            console.log(data)
            const record = await locals.pb.collection("rooms").create(data)
            // console.log(record)

            return {record}
        } catch (error) {
            console.log("Errore : ", JSON.stringify(error))
            return fail(400, {message: "Creazione fallita"})
        }
    }
}