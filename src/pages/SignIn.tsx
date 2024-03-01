import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronLeftCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import tree from "@/assets/images/tree.jpg";
import { Meteors } from "@/components/ui/meteors";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export default function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, "values");
    setIsLoading(false);
  }
  return (
    <section
      style={{ backgroundImage: `url(${tree})` }}
      className="relative min-h-screen bg-cover bg-center p-4 px-8"
    >
      <div className="-z-10 absolute inset-0 bg-opacity-20 bg-black" />
      <Meteors number={10} />
      <Link
        to="/"
        className={buttonVariants({
          variant: "secondary",
        })}
      >
        <ChevronLeftCircle className="mr-2" />
        <p>Back To Home Page</p>
      </Link>

      <h3 className="text-3xl my-8 text-center">Signin</h3>
      <Card className=" max-w-lg mx-auto p-2 py-12 bg-black bg-opacity-50 border-none">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="jhon@email.com" {...field} />
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
                      <Input type="password" placeholder="...." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full  " disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    <span>Signing In...</span>
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Button className="mt-4 " variant="link">
            <Link to="/signup" className="underline">
              Don&apos;t Have An Account?
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
