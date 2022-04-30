import {
  Chip, Divider, ListItem, ListItemText,
} from '@mui/material';

interface Props {
    rank?: number;
    name?: string;
}

export const TrackItem = ({ rank, name }: Props) => (
  <>
    <ListItem
      button
    >
      <Chip
        label={rank}
        sx={{
          marginRight: 2,
        }}
      />
      <ListItemText primary={name} />
    </ListItem>
    <Divider />
  </>
);
