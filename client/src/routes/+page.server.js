import { fail, redirect } from "@sveltejs/kit"

export const load = ({ request, locals }) => {
    if(locals.user) {
        redirect(303, "/home");
    }
}

export const actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())

        try {
            await locals.pb.collection("users").authWithPassword(body.email, body.password)
            // console.log(locals.pb.authStore.model)
        } catch (error) {
            console.log("Error : ", error)
            return fail(400, { notVerified: true })
        }
    }
}