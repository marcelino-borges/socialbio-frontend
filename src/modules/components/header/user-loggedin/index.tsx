import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IApplicationState } from "./../../../../store/index";
import ProfileEditableAvatar from "../../profile-editable-avatar";
import { SubtitleLinks, SubtitleLinksNoUser, UserName } from "./style";
import routes from "../../../../routes/paths";
import strings from "../../../../localization";
import { signOut } from "./../../../../store/auth/actions";
import { useNavigate } from "react-router-dom";
import { LIGHTER_GREY } from "../../../../styles/colors";
import ChooseFileDialog from "../../dialog-file-upload";
import { useState } from "react";
import { IMAGE_EXTENSIONS } from "../../../../constants";
import { deleteImage } from "../../../../services/files";
import { setUserProfileImage } from "../../../../store/user/actions";
import { getFirebaseToken } from "../../../../utils/firebase-config";
import { clearLoading, setLoading } from "./../../../../store/shared/actions";

const UserLoggedIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const userState = useSelector((state: IApplicationState) => state.user);
  const isSmallerThanMD = useMediaQuery(theme.breakpoints.down("md"));

  const [openChooseFileBGDialog, setOpenChooseFileBGDialog] = useState(false);
  const [chosenImage, setChosenImage] = useState<File>();

  const getTwoFirstNames = () => {
    if (!userState.profile) return "";

    const hasntFirstName =
      !userState.profile.firstName || userState.profile.firstName.length < 1;

    const hasntLastName =
      !userState.profile.lastName || userState.profile.lastName.length < 1;

    if (hasntLastName) {
      if (hasntFirstName) {
        return "";
      } else {
        const names: string[] = userState.profile.firstName.split(" ");

        return names[0];
      }
    }
    if (!hasntFirstName) {
      const firstNames: string[] = userState.profile.firstName.split(" ");
      const lastNames: string[] = userState.profile.lastName.split(" ");

      return `${firstNames[0]} ${lastNames[0]}`;
    } else {
      const lastNames: string[] = userState.profile.lastName.split(" ");
      return lastNames[0];
    }
  };

  return userState.profile && userState.profile._id ? (
    <Grid
      container
      item
      direction={isSmallerThanMD ? "column" : "row"}
      justifyContent="flex-end"
      pr={!isSmallerThanMD ? "32px" : "0px"}
      wrap="nowrap"
    >
      <ChooseFileDialog
        openChooseFileDialog={openChooseFileBGDialog}
        setOpenChooseFileDialog={setOpenChooseFileBGDialog}
        chosenImage={chosenImage}
        setChosenImage={setChosenImage}
        acceptedFiles={IMAGE_EXTENSIONS}
        submitDialog={async () => {
          const token = await getFirebaseToken();
          if (!chosenImage || !token || !userState.profile) return;

          if (
            userState.profile &&
            userState.profile._id &&
            userState.profile.profileImageUrl &&
            userState.profile.profileImageUrl.length > 0
          ) {
            dispatch(setLoading());
            try {
              await deleteImage(
                userState.profile.profileImageUrl,
                userState.profile._id,
                token
              );
            } catch (e: any) {
              console.log("Erro ao deletar imagem. Detalhes: ", e.message);
            }
          }

          dispatch(
            setUserProfileImage(
              chosenImage,
              userState.profile,
              () => {
                dispatch(clearLoading());
              },
              () => {
                dispatch(clearLoading());
              }
            )
          );

          setChosenImage(undefined);
          setOpenChooseFileBGDialog(false);
        }}
        cancelDialog={() => {
          setChosenImage(undefined);
          setOpenChooseFileBGDialog(false);
        }}
      />
      <Grid
        container={!!isSmallerThanMD ? true : undefined}
        item
        justifyContent="center"
      >
        <ProfileEditableAvatar
          imageUrl={userState.profile?.profileImageUrl}
          onClick={() => {
            setOpenChooseFileBGDialog(true);
          }}
          width="50px"
          height="50px"
          badgeBgSize="22px"
          badgeIconSize="15px"
          noUserIconSize="36px"
        />
      </Grid>
      <Stack
        direction="column"
        justifyContent="center"
        pl={!isSmallerThanMD ? "12px" : "0px"}
        flexWrap="nowrap"
      >
        <UserName>{getTwoFirstNames()}</UserName>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={isSmallerThanMD ? "center" : undefined}
          flexWrap="nowrap"
        >
          <SubtitleLinks to={routes.profile}>{strings.profile}</SubtitleLinks>
          <Grid item px="8px" color={LIGHTER_GREY}>
            |
          </Grid>
          <SubtitleLinks
            onClick={() => {
              dispatch(
                signOut(() => {
                  navigate(routes.root);
                })
              );
            }}
            to="#"
          >
            {strings.signOut}
          </SubtitleLinks>
        </Stack>
      </Stack>
    </Grid>
  ) : (
    <Stack direction="row" pl="12px" alignItems="center">
      <SubtitleLinksNoUser to={routes.signIn}>
        {strings.signIn2}
      </SubtitleLinksNoUser>
      <Grid item px="8px" color={LIGHTER_GREY}>
        |
      </Grid>
      <SubtitleLinksNoUser to={routes.signUp}>
        {strings.signUp}
      </SubtitleLinksNoUser>
    </Stack>
  );
};

export default UserLoggedIn;
