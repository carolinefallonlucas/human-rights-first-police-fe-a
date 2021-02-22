import React from 'react';
import { Timeline } from 'vertical-timeline-component-for-react';
import { useTimeline } from '../../hooks/legacy/useTimeline';
import { nanoid } from 'nanoid';
import TimelineItems from './TimelineItems';

export function RecentTimeline() {
  const timelineQuery = useTimeline();

  return timelineQuery.isSuccess ? (
    <div className="timeline-container">
      <h2> Recent Events </h2>
      <Timeline lineColor={'#</Timeline>ddd'}>
        {timelineQuery.data.map(details => {
          return <TimelineItems details={details} key={nanoid()} />;
        })}
      </Timeline>
    </div>
  ) : null;
}

export default RecentTimeline;
