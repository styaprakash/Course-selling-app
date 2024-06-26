import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


function Signup() {
  return (
    <div>
        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Typography variant={"h6"}>
          Welcome to Coursera. sign up below
          </Typography>
        </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Card variant={"outlined"} style={{width: 400,padding:20}}>
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <br /><br/>
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br/><br/>
          <Button size={"large"} variant="contained">Sign up</Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
