/* eslint-disable react-hooks/rules-of-hooks */
import { MenuOutlined } from "@mui/icons-material";
import {
  IconButton,
  SwipeableDrawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { useState } from "react";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function NavigationDrawer({
  children,
}: {
  children: JSX.Element;
}) {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuOutlined />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div className={classes.list}>
          <Box textAlign="center" p={2}>
            Components
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => router.push("/container")}>
              <ListItemText primary={"Container"} />
            </ListItem>
            <ListItem button onClick={() => router.push("/grid")}>
              <ListItemText primary={"Grid"} />
            </ListItem>
            <ListItem button onClick={() => router.push("/box")}>
              <ListItemText primary={"Box"} />
            </ListItem>
            <ListItem button onClick={() => router.push("/cards")}>
              <ListItemText primary={"Cards"} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
      <main>
        <Container maxWidth="lg" disableGutters>
          {children}
        </Container>
      </main>
    </div>
  );
}
