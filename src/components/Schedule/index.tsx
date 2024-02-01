import React from "react";
import { ScheduleCard, ScheduleContent, ScheduleFlexContainer, ScheduleSection } from "./styles";
import { Lab } from "@/assets/svg";
import useWindowWidth from "@/hooks/useWindowWidth";

const scheduleItems = [
  { time: "", title: "" }, // empty card
  { time: "11:00am - 11:30am", title: "Introduction" },
  { time: "", title: "" }, // empty card
  { time: "11:00am - 11:30am", title: "Lab 1" },
  { time: "11:00am - 11:30am", title: "Lunch Break" },
  { time: "", title: "" }, // empty card
  { time: "11:00am - 11:30am", title: "Lab 2/ Closing remark" },
  { time: "", title: "" }, // empty card
];

const scheduleItemsMobile = [
  { time: "", title: "" }, // empty card
  { time: "11:00am - 11:30am", title: "Introduction" },
  { time: "11:00am - 11:30am", title: "Lab 1" },
  { time: "", title: "" }, // empty card
  { time: "", title: "" }, // empty card
  { time: "11:00am - 11:30am", title: "Lunch Break" },
  { time: "11:00am - 11:30am", title: "Lab 2/ Closing remark" },
  { time: "", title: "" }, // empty card
];

const ScheduleComponent: React.FC = () => {
  const windowWidth = useWindowWidth();

  return (
    <ScheduleSection id="Schedule">
      <ScheduleContent>
        <h2>Schedule</h2>

        <ScheduleFlexContainer>
          {(windowWidth < 768 ? scheduleItemsMobile : scheduleItems).map((item, index) => {
            return item.title ? (
              <ScheduleCard key={index}>
                <h3>{item.title}</h3>
                <p>{item.time}</p>
              </ScheduleCard>
            ) : (
              <ScheduleCard key={index} icon>
                <Lab />
              </ScheduleCard>
            );
          })}
        </ScheduleFlexContainer>
      </ScheduleContent>
    </ScheduleSection>
  );
};

export default ScheduleComponent;
