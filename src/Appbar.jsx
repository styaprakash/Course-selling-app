import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Appbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding:4 }}>
      <div>
        <Typography>Coursera</Typography>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{marginRight:  '10px'}}>
          <Button 
            variant={"contained"}
            onClick={()=>{
              history.push("/signup");
            }}
          >Sign up</Button>
        </div>
        <div>  
          <Button variant={"contained"}
            onClick={()=>{
              history.push("/signin");
            }}
          >Sign in</Button>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
