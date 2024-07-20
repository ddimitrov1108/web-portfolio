"use client";

import { easeInOut, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { contactFormSchema, ContactFormValues } from "@/lib/schema";
import Textarea from "../ui/textarea";
import Input from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Button from "../ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import DOMPurify from "dompurify";

const formVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.9, easeInOut },
  },
};

interface Props {}
const ContactForm = (props: Props) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      description: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const { sendEmail } = await import("@/actions/send-email");

    await sendEmail({
      ...data,
      description: DOMPurify.sanitize(data.description),
    })
      .then(() => {
        toast.success("Your message was sent.");
      })
      .catch((e) => {
        toast.error((e as Error).message);
      });

    form.reset();
  };

  const isFormDisabled = form.formState.isSubmitting;
  const onSubmitHandler = form.handleSubmit(onSubmit);

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <Form {...form}>
        <form
          onSubmit={onSubmitHandler}
          className="!bg-opacity-100 p-4 py-8 sm:p-6 xl:p-10 rounded-md bg-background/95 border border-secondary-foreground/10 max-w-screen-sm space-y-4"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    minLength={3}
                    maxLength={30}
                    placeholder="Daniel D."
                    disabled={isFormDisabled}
                    {...field}
                  />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    minLength={3}
                    maxLength={80}
                    placeholder="name@example.com"
                    disabled={isFormDisabled}
                    {...field}
                  />
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
                <FormLabel>Subject</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger disabled={isFormDisabled}>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="front-end-development">
                      Front-End Development
                    </SelectItem>
                    <SelectItem value="ui-ux-development">
                      UI/UX Development
                    </SelectItem>
                    <SelectItem value="software-development">
                      Software Development
                    </SelectItem>
                    <SelectItem value="general-task">General Task</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell me what do you want to talk about"
                    className="resize-none"
                    maxLength={500}
                    cols={80}
                    disabled={isFormDisabled}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="!mt-8 flex flex-col-reverse gap-y-8 lg:items-center lg:flex-row lg:justify-between">
            <p className="text-left text-sm text-secondary-foreground">
              Hate Contact Forms?
              <br />
              <Link
                href="mailto:ddimitrov1108@gmail.com"
                className="flex items-center gap-2 text-foreground"
                title="Email Me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={18} />
                Email Me
              </Link>
            </p>
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full lg:w-fit"
              disabled={isFormDisabled}
              loading={isFormDisabled}
            >
              Send
            </Button>
          </div>
        </form>
      </Form>
    </motion.div>
  );
};
export default ContactForm;
