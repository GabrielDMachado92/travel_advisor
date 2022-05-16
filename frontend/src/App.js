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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setCoordinates({
        lat: e.coords.latitude,
        lng: e.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    getPlacesData(bounds.ne, bounds.sw).then((data) => {
      setPlaces(data);
    });
  }, [bounds, coordinates]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
