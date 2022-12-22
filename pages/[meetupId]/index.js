// our-domain.com/new-meetup/[details]

import MeetupDetail from "../../components/meetups/MeetupDetails";

function MeetupDetails() {
  
  return (
    <MeetupDetail
      image="https://a.cdn-hotels.com/gdcs/production86/d278/b66ef277-f5ef-43c0-8aa3-aa0c9ed5b118.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
      title="Italy Meetup"
      address="Piazza di Trevi, 00187 Roma RM, Italy"
      description="Meeting on the right side of the Trevi Fountain."
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
      {
        params: {
          meetupId: "m4",
        },
      },
    ],
  };
};

export async function getStaticProps(context) {
  //fetch data for single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://a.cdn-hotels.com/gdcs/production86/d278/b66ef277-f5ef-43c0-8aa3-aa0c9ed5b118.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
        id: meetupId,
        title: "Italy Meetup",
        address: "Piazza di Trevi, 00187 Roma RM, Italy",
        description: "Meeting on the right side of the Trevi Fountain.",
      },
    },
  };
};

export default MeetupDetails;
