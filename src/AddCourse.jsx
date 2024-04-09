import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { useState } from "react";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          fullWidth={true}
          label="Title"
          variant="outlined"
        />

        <TextField
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          fullWidth={true}
          label="Description"
          variant="outlined"
        />

        <TextField
          onChange={(e) => {
            setImage(e.target.value);
          }}
          fullWidth={true}
          label="Image link"
          variant="outlined"
        />
        <br />
        <br />
        <Button
          size={"large"}
          variant="contained"
          onClick={() => {
            axios.post(
                "http://localhost:3000/admin/courses",
                {
                  title: title,
                  description: description,
                  imageLink: image,
                  published: true,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then(() => {
                alert("Course added!");
              })
              .catch((error) => {
                console.error("There was an error adding the course:", error);
              });
          }}
        >
          Add Course
        </Button>
      </Card>
    </div>
  );
}
