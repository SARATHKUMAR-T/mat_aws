import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Globe, Mail, MapPinned, Phone } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { motion as m, AnimatePresence } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";

const FormSchema = z.object({
  name: z.string({
    required_error: "Please Enter Your Name",
  }),
  email: z
    .string({
      required_error: "Please Enter Your Email",
    })
    .email({
      message: "Please Enter A Valid Email",
    }),
  subject: z.string({
    required_error: "Subject Is Required",
  }),
  mobile: z.string({
    required_error: "Mobile Number Is Required",
  }),
  message: z.string({
    required_error: "Message Is Required",
  }),
});

const Contactus = () => {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="contact-us-australia's no1 matrimony website"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <AnimatePresence>
        <m.main
          key="contact"
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 100,
          }}
          className="max-w-6xl mx-auto py-12 flex flex-col md:flex-row"
        >
          {/* form container */}
          <div className="flex-[2] text-center space-y-3">
            <h1 className="font-bold text-4xl">
              Don't Be A Stranger Just Say Hello.
            </h1>
            <p className="text-lg ">
              We do fast phone repair. In most to repair your device in just
              minutes,we’ll normally get connection inputs, we’ll normally
              callback.
            </p>
            <Card
              className="p-2 bg-rose-700 
        bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100
        "
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardContent className="w-full space-y-6 grid grid-cols-1 sm:grid-cols-2 items-end gap-3 justify-center">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
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
                          <FormControl>
                            <Input placeholder="Your Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Mobile Number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="col-span-2">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                rows={6}
                                placeholder="Your Message"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="mt-2">
                    <Button className="w-full" type="submit">
                      Send Message
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </div>
          {/* information container */}
          <div className="flex-1 flex items-center justify-center gap-6 flex-col">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-center">
                Get Information
              </h1>
              <p className="text-lg text-center">
                Our Contact information Details and
                <br /> Follow us on social media
              </p>
            </div>
            <div className="space-y-1">
              <MapPinned className="h-12 w-12 mx-auto text-rose-700" />
              <h1 className="text-xl font-bold text-center">Office Address</h1>
              <p className="text-lg text-center">
                1201 park street, Fifth Avenue
              </p>
            </div>
            <div className="space-y-1">
              <Phone className="h-12 w-12 mx-auto text-rose-700" />
              <h1 className="text-xl font-bold text-center">Phone Number</h1>
              <p className="text-lg text-center">+2343455353</p>
            </div>
            <div className="space-y-1">
              <Mail className="h-12 w-12 mx-auto text-rose-700" />
              <h1 className="text-xl font-bold text-center">Send Mail</h1>
              <p className="text-lg text-center">info@gmail.com</p>
            </div>
            <div className="space-y-1">
              <Globe className="h-12 w-12 mx-auto text-rose-700" />
              <h1 className="text-xl font-bold text-center">Our Website</h1>
              <p className="text-lg text-center">www.website.com</p>
            </div>
          </div>
        </m.main>
      </AnimatePresence>
    </>
  );
};

export default Contactus;
