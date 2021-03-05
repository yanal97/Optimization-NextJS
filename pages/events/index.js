import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/events-search";

function Events() {
  const events = getAllEvents();
  const router = useRouter();

  function FindEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <div>
      <EventSearch onSearch={FindEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export default Events;
