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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  gender: z.string({
    required_error: "Please Select A Gender",
  }),
  dob: z.string({
    required_error: "Please Select Date Of Birth",
  }),
  seekingFor: z.string({
    required_error: "Please Select A Gender",
  }),
  state: z.string({
    required_error: "Please Select A State",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  terms: z.boolean(),
  nationality: z.boolean(),
});

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      terms: false,
      nationality: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(false);
    console.log(values, "values");
  }

  return (
    <section
      style={{ backgroundImage: `url(${tree})` }}
      className="relative z-10 min-h-screen bg-cover bg-center w-full  p-4   px-8 "
    >
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
      <div className="-z-10 absolute inset-0 bg-opacity-20 bg-black" />
      <div className="space-y-4 ">
        <p className=" text-white uppercase font-semibold mt-24 tracking-wide">
          Start for free
        </p>
        <h1 className="text-5xl font-bold text-white bg-clip-text">
          Create new account.
        </h1>
        <Link
          to="/signin"
          className={buttonVariants({
            variant: "secondary",
            className: "underline !text-primary bg-white !bg-opacity-50",
          })}
        >
          Already Have An Account?
        </Link>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card className="max-w-6xl border-none bg-black bg-opacity-20">
              <CardContent className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                  <div className="p-2">
                    <CardHeader className="p-0 text-white text-2xl font-bold">
                      Basic Info
                    </CardHeader>
                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 w-full gap-4">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Your Name
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              User Name
                            </FormLabel>

                            <FormControl>
                              <Input placeholder="User Name" {...field} />
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
                            <FormLabel className="text-white">
                              Password
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="...." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">DOB</FormLabel>
                            <FormControl>
                              <Input
                                className="w-full"
                                type="date"
                                placeholder="...."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="p-2">
                    <CardHeader className="p-0 text-white text-2xl font-bold">
                      General Info
                    </CardHeader>
                    <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 w-full gap-4">
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Gender</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select A Gender" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="others">Others</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/* seeking for field */}
                      <FormField
                        control={form.control}
                        name="seekingFor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Seeking For
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select A Gender" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="others">Others</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/* state field */}
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">State</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="AUS" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">AUS</SelectItem>
                                <SelectItem value="female">
                                  New Zeland
                                </SelectItem>
                                <SelectItem value="others">Others</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Suburb</FormLabel>
                            <FormControl>
                              <Input type="text" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* terms and condtions */}

                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="col-span-1 sm:col-span-2 flex flex-row items-center  space-x-3 space-y-0 text-white ">
                            <FormControl>
                              <Checkbox
                                className="size-8"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>
                              I have Read And Accept
                              <Link
                                to="/terms"
                                className="text-blue-500 underline ml-2"
                              >
                                Terms Of Service
                              </Link>
                            </FormLabel>
                          </FormItem>
                        )}
                      />

                      {/* australian */}
                      <FormField
                        control={form.control}
                        name="nationality"
                        render={({ field }) => (
                          <FormItem className="col-span-1 sm:col-span-2 flex flex-row items-center  space-x-3 space-y-0 text-white ">
                            <FormControl>
                              <Checkbox
                                className="size-8"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>
                              I Confirm That I Am an Australian or New Zealand
                              Resident.
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-end">
                <Button type="submit" className="" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      <span>Signing Up...</span>
                    </>
                  ) : (
                    <span>Sign Up</span>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </section>
  );
}
