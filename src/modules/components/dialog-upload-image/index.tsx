import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import strings from "../../../localization";
import { Check as CheckIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { GalleryContext, MAXIMUM_FILE_SIZE } from "../../../constants";
import { showErrorToast } from "../../../utils/toast/index";
import { ACESSIBILITY_GREEN, MEDIUM_GREY } from "../../../styles/colors";
import UserGallery from "../gallery-user";
import { Dropzone, DropzoneFileReady, Text } from "./styles";

interface IUploadImageDialogProps {
  openChooseFileDialog: boolean;
  setOpenChooseFileDialog: any;
  chosenImage: any;
  setChosenImage: any;
  acceptedFiles?: string;
  existingImageUrl?: string;
  submitDialog?: (imageUrl?: string) => void;
  cancelDialog?: any;
  context?: GalleryContext[];
}

const UploadImageDialog = ({
  openChooseFileDialog,
  setOpenChooseFileDialog,
  chosenImage,
  setChosenImage,
  acceptedFiles,
  submitDialog,
  cancelDialog,
  context,
  existingImageUrl,
}: IUploadImageDialogProps) => {
  const theme = useTheme();
  const isSmallerThanSM = useMediaQuery(theme.breakpoints.down("sm"));

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    let hasError = false;
    if (file) {
      const actualSizeInMB = file.size / 1000000;

      if (actualSizeInMB > MAXIMUM_FILE_SIZE) {
        showErrorToast(
          strings.maximumFileSizeOf + " " + MAXIMUM_FILE_SIZE + "MB"
        );
        hasError = true;
      }
    }

    if (!hasError) {
      setChosenImage(file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFiles,
  });

  const showDropzoneText = () => {
    if (isDragActive) return <p>{strings.fileHandling.dropYourImageHere}</p>;
    else
      return (
        <p>
          {strings.fileHandling.dragAndDropYourImage}
          <br />
          {strings.or}
          <br />
          {strings.clickToSearchIt.toLowerCase()}.
          <br />
          <br />
          <br />
          {strings.maximumFileSizeOf}
          <br />
          {MAXIMUM_FILE_SIZE + "MB"}
        </p>
      );
  };
  return (
    <Dialog
      open={openChooseFileDialog}
      onClose={() => {
        setOpenChooseFileDialog(false);
      }}
      fullWidth
      fullScreen={isSmallerThanSM}
      maxWidth="md"
      style={{ minWidth: "300px" }}
    >
      <DialogTitle>{strings.fileHandling.chooseImage}</DialogTitle>
      <DialogContent>
        <>
          <UserGallery
            onClickImage={(imageUrl: string) => {
              if (submitDialog) submitDialog(imageUrl);
            }}
            context={context}
          />
          <Text>{strings.orFromYourDevice}</Text>

          {!chosenImage ? (
            <>
              <Dropzone container {...getRootProps()}>
                <input {...getInputProps()} />
                {showDropzoneText()}
              </Dropzone>
              {existingImageUrl && (
                <Grid
                  item
                  color={MEDIUM_GREY}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (submitDialog) {
                      submitDialog(undefined);
                    }
                  }}
                >
                  <DeleteIcon
                    style={{
                      transform: "translateY(5px)",
                      marginRight: "4px",
                    }}
                  />
                  {strings.removeExisting}
                </Grid>
              )}
            </>
          ) : (
            <>
              <DropzoneFileReady
                container
                alignItems="center"
                justifyContent="center"
              >
                <Grid container direction="column" alignItems="center">
                  {chosenImage && (
                    <Grid container item justifyContent="center">
                      <img
                        src={URL.createObjectURL(chosenImage)}
                        alt="Uploaded file"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                  )}
                  <Grid container alignItems="flex-start" direction="column">
                    <Grid
                      item
                      style={{ color: "black" }}
                      color={ACESSIBILITY_GREEN + " !important"}
                    >
                      <CheckIcon
                        color="inherit"
                        fontSize="medium"
                        style={{
                          transform: "translateY(5px)",
                          marginRight: "4px",
                        }}
                      />
                      {strings.fileHandling.fileReadyToUpload}
                    </Grid>
                    <Grid
                      item
                      color={MEDIUM_GREY}
                      style={{ cursor: "pointer" }}
                      onClick={() => setChosenImage(undefined)}
                    >
                      <DeleteIcon
                        style={{
                          transform: "translateY(5px)",
                          marginRight: "4px",
                        }}
                      />
                      {strings.remove}
                    </Grid>
                  </Grid>
                </Grid>
              </DropzoneFileReady>
            </>
          )}
        </>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            cancelDialog();
          }}
        >
          {strings.back}
        </Button>
        <Button
          disabled={!chosenImage}
          onClick={() => {
            if (submitDialog) {
              submitDialog();
            }
          }}
        >
          {strings.send}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(UploadImageDialog);
