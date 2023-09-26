import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

export const MuiTimeline = () => {
  return (
    <Timeline position="left">
      <TimelineItem>
        <TimelineOppositeContent color={"text.secondary"}>
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined"></TimelineDot>
          <TimelineConnector></TimelineConnector>
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color={"text.secondary"}>
          9:45 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined"></TimelineDot>
          <TimelineConnector></TimelineConnector>
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color={"text.secondary"}>
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined"></TimelineDot>
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
