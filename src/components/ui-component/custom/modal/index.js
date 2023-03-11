import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4
};

const CustomModal = ({ isOpen, onClose, sx, children }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{ ...sx, ...style }}>{children}</Box>
    </Modal>
  );
};
export default CustomModal;
