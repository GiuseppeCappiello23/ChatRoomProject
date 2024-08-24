import { redirect } from "@sveltejs/kit"

export const load = ({ request, locals }) => {

    if(locals.user) {
        return locals.user
    }

    redirect(303, "/")
}