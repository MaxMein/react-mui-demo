import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const tableData = [
  {
    id: 1,
    first_name: "Aleen",
    last_name: "Falcus",
    email: "afalcus0@cyberchimps.com",
    gender: "Polygender",
    ip_address: "62.88.192.54",
  },
  {
    id: 2,
    first_name: "Jenn",
    last_name: "Casewell",
    email: "jcasewell1@google.fr",
    gender: "Female",
    ip_address: "141.213.115.104",
  },
  {
    id: 3,
    first_name: "Tonnie",
    last_name: "Kirckman",
    email: "tkirckman2@ezinearticles.com",
    gender: "Polygender",
    ip_address: "224.28.54.183",
  },
  {
    id: 4,
    first_name: "Marilee",
    last_name: "Lanmeid",
    email: "mlanmeid3@nature.com",
    gender: "Female",
    ip_address: "140.35.165.167",
  },
  {
    id: 5,
    first_name: "Shane",
    last_name: "Sunner",
    email: "ssunner4@jugem.jp",
    gender: "Male",
    ip_address: "253.64.45.80",
  },
  {
    id: 6,
    first_name: "Tildie",
    last_name: "Le Sieur",
    email: "tlesieur5@ehow.com",
    gender: "Female",
    ip_address: "110.26.200.123",
  },
  {
    id: 7,
    first_name: "Hilly",
    last_name: "Clayill",
    email: "hclayill6@so-net.ne.jp",
    gender: "Male",
    ip_address: "154.219.181.106",
  },
  {
    id: 8,
    first_name: "Kali",
    last_name: "Sprigg",
    email: "ksprigg7@nps.gov",
    gender: "Female",
    ip_address: "147.171.233.52",
  },
  {
    id: 9,
    first_name: "Meyer",
    last_name: "Laugherane",
    email: "mlaugherane8@rediff.com",
    gender: "Male",
    ip_address: "35.138.180.95",
  },
  {
    id: 10,
    first_name: "Cassie",
    last_name: "Emmanueli",
    email: "cemmanueli9@ezinearticles.com",
    gender: "Female",
    ip_address: "69.223.56.253",
  },
];
