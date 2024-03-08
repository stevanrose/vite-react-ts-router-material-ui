import { Event, CreateEventData } from "../types";

export const createEvent = async (
  createEventData: CreateEventData
): Promise<Event> => {
  const response = await fetch("http://localhost:3173/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createEventData),
  });
  return await response.json();
};
