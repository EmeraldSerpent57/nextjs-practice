// our-domain.com/
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Italy Meetup",
    image:
      "https://a.cdn-hotels.com/gdcs/production86/d278/b66ef277-f5ef-43c0-8aa3-aa0c9ed5b118.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    address: "Piazza di Trevi, 00187 Roma RM, Italy",
    description: "Meeting on the right side of the Trevi Fountain.",
  },
  {
    id: "m2",
    title: "Germany Meetup",
    image:
      "https://www.britannica.com/topic/Neuschwanstein-Castle#/media/1/410798/96013",
    address: "Neuschwansteinstrane 20, 87645 Schwangau, Germany",
    description: "Meeting in the cafe of the Neuschwanstein Castle",
  },
  {
    id: "m3",
    title: "California, US Meetup",
    image:
      "https://national-park.com/wp-content/uploads/2016/04/Welcome-to-Channel-Islands-National-Park.jpg", //url, not file upload
    address: "Ventura, CA 93001",
    description: "Meeting in Channel Islands National Park",
  },
  {
    id: "m4",
    title: "Canary Islands Meetup",
    image:
      "https://de.wikipedia.org/wiki/Papagayo-Strände#/media/Datei:Lanzarote_1_Luc_Viatour.jpg", //url, not file upload
    address: "Calle Punta de Papagayo, 13, 35580 Yaiza, Las Palmas, Spain",
    description: "Meeting in the Playa Blanca area",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
