import React, { useEffect, useState } from "react";
import {
  HeroContent,
  HeroCountdownContainer,
  HeroCountdownMetrics,
  HeroCountdownTitle,
  HeroCountdownValue,
  HeroEventInfo,
  HeroEventInfoContainer,
  HeroEventInfoTitle,
  HeroSection,
} from "./styles";
import bgImage from "@/assets/image/a8a522fc51f8b070026d75658cc7aa6d.png";
import FlexDiv from "@/components/FlexDiv";

const calculateCountdown = (eventDate: Date): { days: number; hours: number; minutes: number; seconds: number } => {
  const now = new Date().getTime();
  const distance = eventDate.getTime() - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const HeroComponent: React.FC = () => {
  const eventDate = new Date("March 28, 2024 11:00:00 GMT-0400"); // Set your event date and time

  const [countdown, setCountdown] = useState(calculateCountdown(eventDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown(eventDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <HeroSection bgImage={bgImage} id="Hero">
      <HeroContent>
        <HeroEventInfoContainer>
          <FlexDiv flexDir="column" flexGap="24px">
            <HeroEventInfoTitle>INTERACTIVE TEACH LAB</HeroEventInfoTitle>

            <FlexDiv flexDir="column" flexGap="8px" maxwidth="540px" margin="0 auto">
              <HeroEventInfo>
                <span>Date :</span> March 28, 2024
              </HeroEventInfo>
              <HeroEventInfo>
                <span>Location : </span>Graves School Of Business, 104 Auditorium
              </HeroEventInfo>
              <HeroEventInfo>
                <span>Time : </span>11am - 2pm
              </HeroEventInfo>
            </FlexDiv>
          </FlexDiv>
        </HeroEventInfoContainer>

        <HeroCountdownContainer>
          <HeroCountdownTitle>Countdown Started</HeroCountdownTitle>
          <FlexDiv justifyContent="space-around">
            <FlexDiv flexDir="column" flexGap="8px">
              <HeroCountdownValue>{countdown.days}</HeroCountdownValue>
              <HeroCountdownMetrics>Days</HeroCountdownMetrics>
            </FlexDiv>
            <FlexDiv flexDir="column" flexGap="8px">
              <HeroCountdownValue>{countdown.hours}</HeroCountdownValue>
              <HeroCountdownMetrics>Hours</HeroCountdownMetrics>
            </FlexDiv>
            <FlexDiv flexDir="column" flexGap="8px">
              <HeroCountdownValue>{countdown.minutes}</HeroCountdownValue>
              <HeroCountdownMetrics>Minutes</HeroCountdownMetrics>
            </FlexDiv>
            <FlexDiv flexDir="column" flexGap="8px">
              <HeroCountdownValue>{countdown.seconds}</HeroCountdownValue>
              <HeroCountdownMetrics>Seconds</HeroCountdownMetrics>
            </FlexDiv>
          </FlexDiv>
        </HeroCountdownContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default HeroComponent;
