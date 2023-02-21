import FormInput from "@/components/form/formInput";
import FormTextArea from "@/components/form/formTextArea";
import Layout from "@/components/layout";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";

const Contact = () => {
  interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  const initialStateForm: FormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formState, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || "");
  const [formData, setFormData] = useState<FormData>(initialStateForm);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmitNotify = () => {
    toast("Thanks for sending us a message!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#fff",
      },
    });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(formData);
    setFormData(initialStateForm);
  };

  useEffect(() => {
    if (formState.succeeded) {
      formSubmitNotify();
    }
  }, [formState]);

  return (
    <Layout scrollPosition={50}>
      <div className="md:h-screen h-screen flex flex-col items-center justify-center md:w-11/12 sm:w-full mt-20">
        <h1 className="leading-snug md:text-7xl text-4xl font-bold">
          Love to hear from you, <br /> Get in touch 👋
        </h1>
        <div className="md:w-2/6 w-full px-5">
          <form
            name="contactForm"
            onSubmit={handleFormSubmit}
            className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-5 sm:gap-3 md:my-7 text-left"
          >
            <FormInput
              type="text"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              span={1}
              placeholder="John Doe"
            />

            <FormInput
              type="text"
              label="Phone"
              name="phone"
              span={1}
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+504 9483-6857"
            />
            <FormInput
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              span={2}
              placeholder="hello@example.com"
            />

            <FormTextArea
              label="Message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message here..."
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 w-60 rounded-lg mt-4"
            >
              Send us a message!
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </Layout>
  );
};

export default Contact;
