import { fail } from '@sveltejs/kit'
import { isValidEmail } from "$lib/utility/functions.js"


// const authData = await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASSWORD);

export const actions = {
    register : async (event) => {
        const data = await event.request.formData();
        const email = data.get("email")
        const password = data.get("password")
        const passwordConfirm = data.get("passwordConfirm")

        if(password != passwordConfirm) {
            return fail(400, {notMatch : true})
        }

        if(!email || !isValidEmail(email)) {
            return fail(400, { email, missing :true})
        }

        const userData = {
            username : email.split("@")[0],
            email,
            emailVisibility : true,
            password,
            passwordConfirm
        }

        try {
            const record = await event.locals.pb.collection("users").create(userData)
            console.log("record : ", JSON.stringify(record))

        } catch (error) {
            return fail(400, {fail: true})
        }
    }
}