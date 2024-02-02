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
    answer: "A: The event is free for educators and future teachers.",
  },
  {
    question: "Q: Are there networking opportunities for attendees?",
    answer: "A: Absolutely! Attendees can connect.",
  },
  {
    question: "Q: Will lunch be provided?",
    answer: "A: Yes, a free lunch will be provided for all registered participants.",
  },
  {
    question: "Q: Will parking be available?",
    answer: "A: All participants are responsible for their parking at the event.",
  },
];

const FAQsComponent: React.FC = () => {
  return (
    <FAQSection id="FAQS">
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
