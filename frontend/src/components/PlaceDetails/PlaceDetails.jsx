import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();
  console.log(refProp.current);

  if (selected)
    refProp?.current?.scrollIntoView({ behaviour: "smooth", block: "start" });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "data:image/jpeg;base64,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CiiirFQooooAKKKKACiiigAooooAKKK571XMbiMhXKkITwDY7UncenHQaAOiileCw2iv9IjI1E4JydJctpLc3vOCRuwOGAMVrs7XaOWUzKoVVCkhGDsHOTgLq0aMcTknfkZIAA2UUsLs6/OrXcqTzbqultOHYroJAi6MN22/j3PEnJrS9eKVGlAcaeaOQoYghmVmQA6D3GoBTxOBuoAZAa9pJ2HydvIoNDXAR+d1qFkd1RAj6UBZd41sDpxjCjJNdt1abRAYrco2Oc0jChiDjmxnm8A4+Pr4VADRSly55Ky3phaOZI2i5wYdGYMJNHSrDSRo7/Guu0s75ZC7TxspGNJLbt25s6AMjpAC6uPa4wfDZ7QIA80ou7ee1Y5zv/mQM9/q3Yz21DzVmSnZ3RlyK2E9nb81I6u5keRioIXLtuAzv3DFMVcez43VAJX1vlu23DI1kpwAGdOkcOiuypBu4UUUUEFTXvY8vTPIyPbmN7h5cl5Q4R5zJjSIyCwBI7roq2KK9qEktCW29QoooqSAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/2Q=="
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Rating size="small" value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award, i) => (
          <Box
            key={i}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
