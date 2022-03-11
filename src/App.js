import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchEvents = async () => {
        setLoading(true)
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
        //need to pull the events info from that data
        const { events } = await res.json()

        setEventData(events)
        setLoading(false)
      }

      fetchEvents()
      
      //need a dependecny array (empty) as a 2nd argument
    }, [])

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
