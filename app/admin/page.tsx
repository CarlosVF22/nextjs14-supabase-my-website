import React from "react";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Admin() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { user },
    } = await supabase.auth.getUser();
    return user ? (
        <div>
            <AuthButton />
        </div>
    ) : (
        <p>Sin autenticar</p>
    );
}
