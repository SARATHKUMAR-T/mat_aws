import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import UserCards from "@/components/SearchPage/UserCards";
import { Helmet } from "react-helmet-async";

const FormSchema = z.object({
  gender: z.string({
    required_error: "Please select a gender.",
  }),
  lookupGender: z.string({
    required_error: "Please select a gender",
  }),
});

const SearchPage = () => {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const [filter, setFilter] = useState<string>("Newest Registered");
  console.log(filter, "filter");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <>
      <Helmet>
        <title>Search</title>
        <meta name="description" content="Find your soul here" />
        <link rel="canonical" href="/search" />
      </Helmet>
      <section className="pb-12 max-w-full pt-4 md:max-w-6xl px-4 md:px-0 h-[calc(100vh-20)] mx-auto space-y-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <Card className="grid grid-cols-1 gap-4 sm:grid-cols-6 justify-around items-center px-5 py-3">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="I Am A" />
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
              <FormField
                control={form.control}
                name="lookupGender"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Looking For" />
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
              {/* age between field */}

              <FormField
                control={form.control}
                name="lookupGender"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="18" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">18</SelectItem>
                        <SelectItem value="female">19</SelectItem>
                        <SelectItem value="others">20</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lookupGender"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="20" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">18</SelectItem>
                        <SelectItem value="female">19</SelectItem>
                        <SelectItem value="others">20</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* country field */}
              <FormField
                control={form.control}
                name="lookupGender"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose Your Country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Australia</SelectItem>
                        <SelectItem value="female">Unites States</SelectItem>
                        <SelectItem value="others">India</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* with denomination */}
              <Button>
                Search Now
                <Search className="ml-3 duration-300 transition-all  group-hover:animate-pulse  group-hover:text-rose-200" />
              </Button>
            </Card>
          </form>
        </Form>

        {/* filter section */}
        <div className="pt-12 flex justify-between">
          <div className="flex gap-2">
            <Card className="p-2">
              <CardContent className="p-0">All Members</CardContent>
            </Card>
            <Card className="p-2 bg-rose-700 px-6">
              <CardContent className="p-0 ">13000</CardContent>
            </Card>
          </div>
          <Select onValueChange={value => setFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Newest Registered" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <UserCards />
      </section>
    </>
  );
};

export default SearchPage;
