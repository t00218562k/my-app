'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const RegisterModal = () => {
    const RegisterModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, }
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    });


    const onSubmit: SubmitHandler<FieldValues> = useCallback(async (data) => {
    return (
        <div>
            <h1>RegisterModal</h1>
        </div>
    );
}

export default RegisterModal;