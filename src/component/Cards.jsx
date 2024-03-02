import React from 'react';

const eventData = [
  { id: 1, title: "Football Tournament", date: "2024-03-15", location: "City Stadium", description: "Join us for an exciting football tournament at City Stadium!", link: "https://www.nfl.com/", image: "football.jpg" },
  { id: 2, title: "Basketball Tryouts", date: "2024-04-05", location: "Community Center", description: "Interested in basketball? Come to our tryouts at the Community Center!", link: "https://www.nba.com/", image: "basketball.jpg" },
  { id: 3, title: "Baseball Game", date: "2024-04-20", location: "City Park", description: "Watch a thrilling baseball game at City Park!", link: "https://www.mlb.com/", image: "baseball.jpg" },
  { id: 4, title: "Soccer Clinic", date: "2024-05-10", location: "Sports Complex", description: "Improve your soccer skills at our soccer clinic in the Sports Complex!", link: "https://www.ussoccer.com/", image: "soccer.jpg" },
  { id: 5, title: "Swimming Championships", date: "2024-06-01", location: "Community Pool", description: "Cheer on your favorite swimmers at the Swimming Championships in the Community Pool!", link: "https://www.usaswimming.org/", image: "swimming.jpg" },
  { id: 6, title: "Tennis Tournament", date: "2024-06-15", location: "Tennis Club", description: "Compete in our annual Tennis Tournament at the Tennis Club!", link: "https://www.usta.com/", image: "tennis.jpg" },
  { id: 7, title: "Golf Tournament", date: "2024-07-10", location: "Golf Course", description: "Tee off at the Golf Tournament on the scenic Golf Course!", link: "https://www.pgatour.com/", image: "golf.jpg" },
  { id: 8, title: "Volleyball League Finals", date: "2024-08-05", location: "Beach Arena", description: "Witness the thrilling finals of the Volleyball League at the Beach Arena!", link: "https://www.bing.com/ck/a?!&&p=19ea6a7b19c58493JmltdHM9MTcwOTI1MTIwMCZpZ3VpZD0xNzUyMmNiNi1iNDUxLTZhMWUtMDFhNi0zODg3YjVjODZiZGMmaW5zaWQ9NTQ2Nw&ptn=3&ver=2&hsh=3&fclid=17522cb6-b451-6a1e-01a6-3887b5c86bdc&psq=usa+volleyball&u=a1aHR0cHM6Ly93d3cudXNhdm9sbGV5YmFsbC5vcmcv&ntb=1", image: "volleyball.jpg" },
  { id: 9, title: "Running Marathon", date: "2024-09-20", location: "City Streets", description: "Challenge yourself in the Running Marathon through the streets of our city!", link: "https://www.nyrr.org/", image: "running.jpg" },
  { id: 10, title: "Hiking Expedition", date: "2024-10-10", location: "Mountain Trails", description: "Embark on an adventurous Hiking Expedition on the beautiful Mountain Trails!", link: "https://www.alltrails.com/", image: "hiking.jpg" },
  { id: 11, title: "Cycling Race", date: "2024-11-05", location: "City Park", description: "Participate in the thrilling Cycling Race at City Park!", link: "https://www.usacycling.org/", image: "cycling.jpg" },
  { id: 12, title: "Skateboarding Competition", date: "2024-12-15", location: "Skatepark", description: "Show off your skills at the Skateboarding Competition in the Skatepark!", link: "https://streetleague.com/", image: "skateboarding.jpg" },
];

const Card = ({ event }) => {
  return (
    <div className="card">
      <img src={"/images/" + event.image} alt={event.title} />
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>{event.description}</p>
      <a href={event.link} className="button">Learn More</a>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="cards">
      {eventData.map(event => (
        <Card key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Cards;
