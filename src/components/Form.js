import React from "react";
import clsx from "clsx";
import {
  Container,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid
} from "@material-ui/core";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      source: null,
      name: "",
      image: null,
      formfilled: false
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeImg = this.handleChangeImg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeText(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleChangeImg(e) {
    this.setState({
      source: URL.createObjectURL(e.target.files[0])
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: this.state.username,
      image: this.state.source,
      formfilled: true
    });
  }

  render() {
    const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
      },
      card: {
        maxWidth: 345
      },
      media: {
        height: 0,
        paddingTop: "56.25%", // 16:9,
        marginTop: "30"
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
      },
      dense: {
        marginTop: 19
      }
    }));

    const username = this.state.name;
    const source = this.state.image;
    var display = null;
    var hr = null;
    if (this.state.formfilled) {
      display = (
        <Card
          className={useStyles.card}
          style={{
            border: "solid 5px rgb(10, 59, 105)"
          }}
        >
          <CardActionArea>
            <CardMedia square style={{ padding: "10px" }}>
              <div>
                <img src={source} alt={username} />
              </div>
            </CardMedia>

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {username}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Please make sure that this is the picture you uploaded along
                with your name you entered. ThankYou.
                <br />
                To upload another image and a new name fill the below form.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
      hr = <hr className="separator" />;
    }

    return (
      <div>
        <Grid
          container
          justify="center"
          style={{
            width: "60%",
            padding: 10,
            height: "80%",
            margin: "auto",
            marginTop: "7%",
            paddingBottom: "5%",
            borderRadius: "5px",
            webkitBoxShadow: "-1px 4px 6px 2px rgba(0, 0, 0, 0.5)",
            mozBoxShadow: "-1px 4px 6px 2px rgba(0, 0, 0, 0.5)",
            boxShadow: "-1px 4px 6px 2px rgba(0, 0, 0, 0.5)",
            backgroundColor: "white"
          }}
        >
          <Grid item xs={12}>
            <Grid container justify="center">
              <Typography
                variant="h2"
                component="h2"
                align="center"
                gutterBottom
                style={{
                  marginTop: "5%",
                  marginBottom: "-5%",
                  color: "#2c3e50",
                  padding: "1%",
                  width: "60%",
                  borderRadius: 5,
                  textShadow:
                    "0px 2px 2px rgba(0,0,0,0.4), 0px 2px 2px rgba(0,0,0,0.1), 0px 2px 2px rgba(0,0,0,0.1)"
                }}
              >
                Image Card Builder
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Container fixed className="outlayer">
                {display}

                {hr}

                <Card
                  className={useStyles.card}
                  style={{
                    border: "solid 5px rgb(10, 59, 105)"
                  }}
                >
                  <form onSubmit={this.handleSubmit}>
                    <CardContent>
                      <input
                        type="file"
                        name="pic"
                        accept="image/*"
                        className="imageinput"
                        onChange={this.handleChangeImg}
                        required
                      />
                      <Typography gutterBottom variant="h5" component="h2">
                        <TextField
                          id="standard-dense"
                          label="Your Name Here"
                          placeholder="Name"
                          className={clsx(useStyles.textField, useStyles.dense)}
                          margin="dense"
                          onChange={this.handleChangeText}
                          required
                        />
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        <Button size="large" type="submit" color="primary">
                          Submit
                        </Button>
                      </Typography>
                    </CardContent>
                  </form>
                </Card>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Form;
