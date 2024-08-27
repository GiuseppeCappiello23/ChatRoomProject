import { redirect } from "@sveltejs/kit"
import env from "dotenv"

env.config()

export const load = ({ request, locals }) => {

    if(locals.user) {
        return {user: locals.user, env: process.env.ENV}
    }

    redirect(303, "/")
}