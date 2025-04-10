import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import { AnimatedGradientText } from "@/src/components/magicui/animated-gradient-text";

const defaultData = [
  {
    answer:
      "SynexTech is a digital platform that helps any organization—be it a school, NGO, local business, religious trust, or club—get online easily and affordably. We offer a free basic website and optional tools to manage operations, communication, payments, and more",
    iconPosition: "right" as "right" | "left",
    id: 1,
    question: "What is SynexTech?",
  },
  {
    answer:
      "Yes! We provide a basic website for free to help Organization  get started.",
    id: 2,
    question: " Is it really free?",
  },
  {
    answer:
      "No. Our team will set everything up for you. It’s simple, and we guide you step-by-step.",
    id: 3,
    question: "Do I need technical knowledge to use SynexTech?",
  },
  {
    answer:
      "Once we receive your details, your website can be ready in 1 to 3 days.",
    iconPosition: "left" as "right" | "left",
    id: 4,
    question: "How long does it take to get our school website?",
  },
  {
    answer:
      "We provide ongoing support via phone, WhatsApp, and email. Our goal is to make sure you're always up and running.",
    id: 5,
    question: "What if I need support later?",
  },

  {
    answer:
      "Absolutely. Your data is stored securely, is never shared, and is protected by strong privacy policies.",
    id: 6,
    question: " Is my organization’s data safe?",
  },
  {
    answer:
      "Yes! We offer 24×7 support via phone calls, text messages, WhatsApp, and email. We're always here to help you, day or night.",
    id: 7,
    question: "Do you provide customer support?",
  },
];
const Questions = () => {
  return (
    <div className="h-150 w-full flex flex-col justify-center items-center bg-background">
      <AnimatedGradientText className="text-4xl md:text-6xl font-bold my-10 py-4">
        FAQs
      </AnimatedGradientText>
      <FaqAccordion
        data={defaultData}
        className="max-w-[700px]"
        questionClassName="bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 hover:dark:bg-zinc-700"
        answerClassName="bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-foreground"
        timestamp="Updated daily at 12:00 PM"
      />
    </div>
  );
};

export default Questions;
