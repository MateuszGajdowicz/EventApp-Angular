export type EventType =
  | 'meetup'
  | 'concert'
  | 'workshop'
  | 'party'
  | 'sport'
  | 'conference'
  | 'webinar';
export type CommentType = {
  id: number;
  date: string;
  user: string;
  content: string;
};
export type eventType = {
  id: number;
  title: string;
  description: string;
  host: string;
  location: string;
  type: EventType;
  tags: string[];
  capacity: number;
  currentMembers: number;
  status: 'willing' | 'interested' | 'unwilling';
  comments: CommentType[];
};
