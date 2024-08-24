import { redirect } from "@sveltejs/kit";

export const GET = ({ request, locals }) => {
    if(locals.user) {
        locals.pb.authStore.clear();
        locals.user = undefined

        redirect(303, "/")
    }
}