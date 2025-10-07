"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "_/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "_/components/ui/form";
import { Input } from "_/components/ui/input";
import { useForm } from "react-hook-form";
import { schema } from "./login.schema";
import { LoginFormType } from "./login.types";
import { handleLogin } from "./login.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const router = useRouter();

  const RhfObj = useForm({
    resolver: zodResolver(schema),
  });
  const { control, handleSubmit } = RhfObj;

  async function mySubmit(data: LoginFormType) {
    // const resOutput = await handleLogin(data);
    const res = await signIn('credentials',{...data, redirect:true});
    console.log(res);
    if(res?.ok){
        toast.success("Welcome back", {
          position: "top-right",
          duration: 3000,
        });
        window.location.href='/';
    }else{
        toast.error("Email or Password is in-correct", { position: "top-right", duration: 3000 });
    }
    // if (resOutput === true) {
    //   router.push('/');
    // } else {
    // }
  }

  return (
    <Form {...RhfObj}>
      <form onSubmit={handleSubmit(mySubmit)}>
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                {/* Your form field */}
                <Input {...field} type="email" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password:</FormLabel>
              <FormControl>
                {/* Your form field */}
                <Input {...field} type="password" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Login</Button>
      </form>
    </Form>
  );
}
