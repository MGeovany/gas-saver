import FormInput from "@/components/form/formInput";
import FormSelect from "@/components/form/formSelect";
import FormTextArea from "@/components/form/formTextArea";
import Layout from "@/components/layout";

const Contact = () => {
  return (
    <Layout scrollPosition={50}>
      <div className="md:h-screen h-screen flex flex-col items-center justify-center md:w-11/12 sm:w-full">
        <h1 className="leading-snug md:text-7xl text-4xl font-bold">
          Love to hear from you, <br /> Get in touch 👋
        </h1>
        <div className="md:w-2/6 w-full px-5">
          <form
            name="Contact Form"
            method="POST"
            className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-5 sm:gap-3 md:my-7 text-left"
          >
            <FormInput
              type="text"
              label="Name"
              name="Name"
              span={1}
              placeholder="John Doe"
            />

            <FormInput
              type="text"
              label="Phone"
              name="Phone"
              span={1}
              placeholder="+504 9483-6857"
            />
            <FormInput
              type="email"
              label="Email"
              name="Email"
              span={2}
              placeholder="hello@example.com"
            />

            <FormTextArea
              label="Message"
              name="Message"
              rows={4}
              placeholder="Your message here..."
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 w-60 rounded-lg mt-4">
              Send us a message!
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
