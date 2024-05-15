import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; // Corrected import
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { axiosClient } from "../../api/api";
import { STUDENT_DASHBOARD_ROUTE } from "../../router";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from './../../context/UserContext';

const formSchema = z.object({
  email: z.string().email().min(2).max(30),
  password: z.string().min(8).max(30),
});

export default function StudentLogin() {
  const { login, setauthenticated } = useUserContext();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "test@example.com",
      password: "123456789",
    },
  });
  const {
    setError,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values) => {
    login(values.email, values.password)
      .then((value) => {
        if (value.status === 204) {
          setauthenticated(true);
          navigate(STUDENT_DASHBOARD_ROUTE);
        }
      })
      .catch(({ response }) => {
        form.setError("email", {
          message: response.data.errors.email.join(),
        });
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type={"password"} placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting && <Loader className={"mx-2 my-2 animate-spin"} />}{" "}
          Submit
        </Button>
      </form>
    </Form>
  );
}
