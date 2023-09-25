import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component={"h1"} gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
        reprehenderit soluta facilis? Repudiandae ipsam eius quae totam nobis
        incidunt dolore at quidem distinctio, harum esse quos aut, facilis ullam
        alias.
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        delectus tempore dolores nisi totam cumque numquam voluptatum expedita
        soluta quisquam ratione, reiciendis necessitatibus alias ducimus maiores
        impedit porro temporibus mollitia?
      </Typography>
    </div>
  );
};
