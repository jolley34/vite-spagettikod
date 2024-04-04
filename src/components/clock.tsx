import { useEffect, useState } from "react";

/* En lista med helt onödiga namn. */

const cities = {
  newyork: {
    whichCity: "New York",
    whichColor: "lightblue",
  },
  stockholm: {
    whichCity: "Stockholm",
    whichColor: "lightyellow",
  },
};

/* En bättre gjord lista med enklare defineringar. */
/* Denna hade jag hellre använt mig av. */

/* const cities = {
  newyork: {
    city: "New York",
    color: "lightblue",
  },
  stockholm: {
    city: "Stockholm",
    color: "lightyellow",
  },
}; */

const Clock = () => {
  /* Egentligen kan det vara bättre att ha en use state för båda tidzonerna  const [times, setTimes] = useState(cities); */

  /* sen definerat dom   <h1 className="clock">{times.stockholm}</h1> och   <h1 className="clock">{times.newyork}</h1> istället */

  /* Det absolut bästa hade såklart varit att använda ett API som anpassar sommartid osvosv. */
  const [clockiswhatTime, setclockiswhatTime] = useState(""); // Onödigt långa namn istället hade jag satt kanske localTime och setLocalTime.
  const [clockiswhatTimeNewYork, setclockiswhatTimeNewYork] = useState(""); // Onödigt långa namn istället hade jag satt kanske newYorkTime och setNewYorkTime.

  const UpdateTime = () => {
    /* Den här hade man kunnat förbättre så att man slipper separera funktioner för varje tidszon. */
    const currentTime = new Date();

    const localTime = currentTime.toLocaleTimeString();

    const newYorkTime = new Date(
      currentTime.getTime() - 6 * 60 * 60 * 1000
    ).toLocaleTimeString();

    setclockiswhatTime(localTime);
    setclockiswhatTimeNewYork(newYorkTime);
  };

  /* Användningen av setInterval i useEffect skapar en oändlig loop eftersom useEffect körs varje gång komponenten uppdateras, vilket sedan anropar UpdateTime och sätter en ny timeout, vilket leder till upprepade anrop till funktionen. */
  useEffect(() => {
    setInterval(UpdateTime, 1000); // En fördröjning för att göra det ännu långsammare. (Jag had tagit bort use effect för detta och enbart gjort som nedan)
  }, []);

  /* hade istället gjort som nedan och inte använt en fixad uppdateingstid. */
  /*  setInterval(UpdateTime) */

  // Skriv ut i konsolen varje gång klockan uppdateras , (Den här delen är helt onödig att ha med) , möjligtvis om man testar den.
  useEffect(() => {
    console.log("Klockan uppdateras!");
  });

  return (
    <>
      <section className="container">
        {/* Här hade de ju varit beydligt enklare med bara stockholm.color */}
        <h1 style={{ color: cities.stockholm.whichColor }}>
          {/* Här hade de ju varit beydligt enklare med bara stockholm.city */}
          {cities.stockholm.whichCity}
        </h1>
        <h1 style={{ color: cities.stockholm.whichColor }} className="clock">
          {clockiswhatTime}
        </h1>
      </section>
      <section className="container">
        {/* Här hade de ju varit beydligt enklare med bara newyork.color */}
        <h1 style={{ color: cities.newyork.whichColor }}>
          {/* Här hade de ju varit beydligt enklare med bara newyork.city */}
          {cities.newyork.whichCity}
        </h1>
        <h1 style={{ color: cities.newyork.whichColor }} className="clock">
          {clockiswhatTimeNewYork}
        </h1>
      </section>
    </>
  );
};

export default Clock;
