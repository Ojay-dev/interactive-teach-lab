import React from "react";
import { FAQContent, FAQSection, SAnswer, SFAQItem, SQuestion } from "./styles";
import FlexDiv from "../FlexDiv";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
// import { Lab } from "@/assets/svg";

const sampleQuestions = [
  {
    question: "Q: How can I register for the INTERACTIVE TEACH LAB event?",
    answer:
      "A: Registration is simple! Visit our website and click on the 'Register' button. Follow the prompts to provide your details and secure your spot at the event.",
  },
  {
    question: "Q: What topics will be covered during the Instructional Technology sessions?",
    answer:
      "A: We have a diverse range of topics, including AI in education, virtual classrooms, interactive learning tools, and more. Our expert instructors will provide hands-on training in cutting-edge instructional technology.",
  },
  {
    question: "Q: Is there a fee for attending the event?",
    answer:
      "A: The event is free for educators and future teachers. However, there might be optional premium workshops or materials available for purchase. Check our website for detailed information.",
  },
  {
    question: "Q: Can I access session recordings after the event?",
    answer:
      "A: Yes, all registered participants will have access to session recordings for a limited time after the event. This allows you to revisit valuable content or catch up on sessions you may have missed.",
  },
  {
    question: "Q: Are there networking opportunities for attendees?",
    answer:
      "A: Absolutely! We have dedicated networking sessions and virtual spaces where attendees can connect, share ideas, and build a community of like-minded educators and professionals.",
  },
  {
    question: "Q: What technology requirements do I need for the virtual event?",
    answer:
      "A: You'll need a stable internet connection, a device (computer, tablet, or smartphone), and a compatible browser. Make sure to check our technical requirements page for any specific software or hardware recommendations.",
  },
  {
    question: "Q: Can I receive a certificate of participation after attending the INTERACTIVE TEACH LAB event?",
    answer:
      "A: Yes, we will provide certificates of participation for all attendees. These certificates can be downloaded from your profile on our website after the event concludes.",
  },
];

const FAQsComponent: React.FC = () => {
  return (
    <FAQSection id="Schedule">
      <FAQContent>
        <h2>Frequently Asked Questions</h2>

        <FlexDiv flexDir="column" flexGap="24px" margin="80px 0 0">
          {sampleQuestions.map((_faq, i) => (
            <FAQItem key={i} {..._faq} />
          ))}
        </FlexDiv>
      </FAQContent>
    </FAQSection>
  );
};

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <SFAQItem>
      <SQuestion
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {props.question}
        {isOpen ? <MinusOutlined /> : <PlusOutlined size={14} />}
      </SQuestion>
      {isOpen && <SAnswer>{props.answer}</SAnswer>}
    </SFAQItem>
  );
};

export default FAQsComponent;
