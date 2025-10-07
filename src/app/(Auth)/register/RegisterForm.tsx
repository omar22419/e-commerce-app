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
import { schema } from "./register.schema";
import { RegisterFormType } from "./register.types";
import { handleRegister } from "./register.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  const RhfObj = useForm({
    resolver: zodResolver(schema)
  });
  const { control, handleSubmit } = RhfObj;

  async function mySubmit(data: RegisterFormType) {
    const resOutput = await handleRegister(data);

    if(resOutput===true){
      toast.success("Congratulations created Successfully", {position:"top-right", duration:3000});
      router.push('/login');
    }
    else{
      toast.error(resOutput, {position:"top-right", duration:3000});
    }
  }



  return (
    <Form {...RhfObj}>
      <form onSubmit={handleSubmit(mySubmit)}>
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                {/* Your form field */}
                <Input {...field} type="text" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

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

        <FormField
          control={control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password:</FormLabel>
              <FormControl>
                {/* Your form field */}
                <Input {...field} type="password" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>user Phone:</FormLabel>
              <FormControl>
                {/* Your form field */}
                <Input {...field} type="tel" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button>Register</Button>
      </form>
    </Form>
  );
}
