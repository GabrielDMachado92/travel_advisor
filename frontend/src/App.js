import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setCoordinates({
        lat: e.coords.latitude,
        lng: e.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getPlacesData(bounds.ne, bounds.sw).then((data) => {
      setPlaces(data);
      setLoading(false);
    });
  }, [bounds, coordinates]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={4}>
          <List places={places} childClicked={childClicked} loading={loading} />
        </Grid>
        <Grid item xs={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
