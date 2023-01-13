import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  CircularProgress,
} from '@mui/material';

import { useDetails } from '../../hooks/useDetails';

export interface DetailsDialogProps {
  cardId: number | null;
  open: boolean;
  onClose: (flag: boolean) => void;
}

export const Details = ({ cardId, open, onClose }: DetailsDialogProps) => {
  const { data, isLoading } = useDetails(cardId as number);
  if (!data && isLoading) return <CircularProgress />;

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>
          <Box component="img" src={data.logo} sx={{ width: 40, height: 40 }} />
          <Box>Name: {data.name}</Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Company: {data.company}</DialogContentText>
          <DialogContentText>
            Number of users: {data.number_of_users}
          </DialogContentText>
          <DialogContentText>
            Number of active users: {data.number_of_active_users}
          </DialogContentText>
          <DialogContentText>
            Server address: {data.server_address}
          </DialogContentText>
          <DialogContentText>Admin:</DialogContentText>
          <DialogContentText>
            {data.admin.first_name} {data.admin.last_name}
          </DialogContentText>
          <DialogContentText>{data.admin.email}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
