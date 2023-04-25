'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import ToasterProvider from "@/app/providers/ToasterProvider";
import toast from "react-hot-toast";
import Button from "../Button";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
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

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post("/api/register", data)
            .then(() => {
                registerModal.onClose();
            })
            .catch(err => {
                toast.error("error something went wrong");
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading 
                title="Welcome to IBI"
                subtitle="Create an account to continue"
            />
            <Input 
                id="email"
                label="Email"
                disbaled={isLoading}
                register={register}
                errors={errors}
                required
            />
             <Input 
                id="password"
                type="password"
                label="Password"
                disbaled={isLoading}
                register={register}
                errors={errors}
                required
            />
             <Input 
                id="name"
                label="Name"
                disbaled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button 
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => {}}
            />
            <Button 
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => {}}
            />
            <div className="
                text-neutral-500
                text-center
                mt-4
                font-light
            ">
                <div>Already have an account?</div>
                <div 
                    onClick={registerModal.onClose}
                    className="
                        hover:underline
                        cursor-pointer
                        text-neutral-800
                ">
                    Login 
                </div>
            </div>
        </div>
    )
    
    return (
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default RegisterModal;