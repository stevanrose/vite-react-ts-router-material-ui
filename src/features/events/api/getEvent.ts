import { Event } from "../types";

export const getEvent = async (id: number): Promise<Event> => {
  const response = await fetch(`http://localhost:3173/events/${id}`);
  return await response.json();
};
