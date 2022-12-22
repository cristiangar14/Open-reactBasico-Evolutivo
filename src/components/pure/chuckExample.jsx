import React, { useEffect, useState } from "react";
import { getJokes } from "../../services/chuckService";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  List,
  CircularProgress,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import {
  ThumbDown,
  ThumbDownOffAlt,
  ThumbUp,
  ThumbUpOffAlt,
} from "@mui/icons-material";
import { Box } from "@mui/system";

const initialJoke = {
  value: "",
  id: "",
};

const ChuckExample = () => {
  const [listJokes, setListJokes] = useState([]);
  const [joke, setJoke] = useState(initialJoke);
  const [dislike, setDislike] = useState(false);
  const [like, setlike] = useState(false);

  useEffect(() => {
    obtainJoke();
  }, []);

  const obtainJoke = () => {
    getJokes()
      .then((response) => {
        if (response.status === 200) {
          let resp = response.data;
          setJoke({
            ...resp,
            dislikes: 0,
            likes: 0,
          });
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`));
  };

  const likeJoke = async () => {
    await setlike(!like);
    if (!like) {
      if (dislike) {
        setDislike(!dislike);
        setJoke({
          ...joke,
          dislikes: joke.dislikes - 1,
          likes: joke.likes + 1,
        });
      } else {
        setJoke({
          ...joke,
          likes: joke.likes + 1,
        });
      }
    } else {
      setJoke({
        ...joke,
        likes: joke.likes - 1,
      });
    }
  };

  const dislikeJoke = async () => {
    await setDislike(!dislike);
    if (!dislike) {
      if (like) {
        setlike(!like);
        setJoke({
          ...joke,
          likes: joke.likes - 1,
          dislikes: joke.dislikes + 1,
        });
      } else {
        setJoke({
          ...joke,
          dislikes: joke.dislikes + 1,
        });
      }
    } else {
      setJoke({
        ...joke,
        dislikes: joke.dislikes - 1,
      });
    }
  };

  const saveAndNext = async () => {
    setListJokes([joke, ...listJokes]);
    obtainJoke();
    setlike(false);
    setDislike(false);

  };


  return (
    <>
      <h1>Chucknorris jokes</h1>
      <Box>
        <ListItemIcon>
          <ThumbUp />
          {listJokes.reduce((acumulador, actual) => acumulador + actual.likes, 0)}
        </ListItemIcon>
        <ListItemIcon>
          <ThumbDown />
          {listJokes.reduce((acumulador, actual) => acumulador + actual.dislikes, 0)}
        </ListItemIcon>
      </Box>
      <Box>
        <div>
          {joke.value ? (
            <Card sx={{ maxWidth: 600 }}>
              <CardContent>
                <Typography>{joke.value}</Typography>
              </CardContent>
              <CardActions>
                <div>
                  <Button onClick={likeJoke}>
                    {like ? <ThumbUp /> : <ThumbUpOffAlt />}
                    {joke.likes > 0 && <p>{joke.likes}</p>}
                  </Button>
                </div>
                <div>
                  <Button onClick={dislikeJoke}>
                    {dislike ? <ThumbDown /> : <ThumbDownOffAlt />}
                    {joke.dislikes > 0 && <p>{joke.dislikes}</p>}
                  </Button>
                </div>
              </CardActions>
              <Button variant="contained" color="primary" onClick={saveAndNext}>
                Next
              </Button>
            </Card>
          ) : (
            <Button variant="contained" color="primary" onClick={saveAndNext}>
              Start
            </Button>
          )}
        </div>
        {listJokes.length ? (
          <List
            sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
          >
            {listJokes.map((item, index) => (
              <ListItem key={item.id}>
                <ListItemText>
                  <Typography>{item.value}</Typography>
                </ListItemText>
                <ListItemIcon>
                  <ThumbUp />
                  {item.likes}
                </ListItemIcon>
                <ListItemIcon>
                  <ThumbDown />
                  {item.dislikes}
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        ) : null}
      </Box>
    </>
  );
};

export default ChuckExample;
