import { FC } from "react";
import { styled } from "@material-ui/core/styles";
import MuiModal, { ModalProps as MuiModalProp } from "@material-ui/core/Modal";
import Paper, { PaperProps } from "@material-ui/core/Paper";

interface IOverlay extends PaperProps {
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
}

const Overlay = styled(({ maxWidth, maxHeight, ...paperProps }: IOverlay) => (
  <Paper {...paperProps} />
))({
  height: "90vh",
  left: "50vw",
  maxHeight: ({ maxHeight = "900px" }: IOverlay) => maxHeight,
  maxWidth: ({ maxWidth = "1366px" }: IOverlay) => maxWidth,
  padding: ({ padding = "32px" }: IOverlay) => padding,
  position: "absolute",
  top: "50vh",
  transform: "translate(-50%, -50%)",
  width: "90vw",
});

const Modal: FC<MuiModalProp> = ({ children, ...modalProps }) => (
  <MuiModal {...modalProps}>
    <Overlay elevation={0} variant="outlined">
      {children}
    </Overlay>
  </MuiModal>
);

export default Modal;
