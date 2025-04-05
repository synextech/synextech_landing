import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import { AnimatedGradientText } from "@/src/components/magicui/animated-gradient-text";

const defaultData = [
  {
    answer: "The internet doesn't close. It's available 24/7.",
    iconPosition: "right" as "right" | "left",
    id: 1,
    question: "How late does the internet close?",
  },
  {
    answer: "No, you don't need a license to browse this website.",
    id: 2,
    question: "Do I need a license to browse this website?",
  },
  {
    answer:
      "Our cookies are digital, not edible. They're used for website functionality.",
    id: 3,
    question: "What flavour are the cookies?",
  },
  {
    answer: "Yes, but we do have a return policy",
    iconPosition: "left" as "right" | "left",
    id: 4,
    question: "Can I get lost here?",
  },
  {
    answer: "Don't worry, you can always go back or refresh the page.",
    id: 5,
    question: "What if I click the wrong button?",
  },
];
const Faq = () => {
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

export default Faq;
