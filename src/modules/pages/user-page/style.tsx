import { styled } from "@mui/system";
import { Avatar, Grid } from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";
import {
  LIGHTER_GREY,
  MEDIUM_GREY,
  PRIMARY_COLOR,
} from "./../../../styles/colors";

export const PageToolbar = styled(
  ({ fontWeight, color, fontSize, fontStyle, ...rest }: any) => (
    <Grid {...rest} />
  )
)`
  padding: 24px;
  padding-top: 36px;
  border-radius: 0px 0px 15px 15px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;
  margin-top: -24px;
  min-width: 250px;
  position: relative;
  z-index: 100;

  @media (max-width: 315px) {
    margin-top: 0px;
  }
`;

export const PageName = styled(
  ({ fontWeight, color, fontSize, fontStyle, ...rest }: any) => (
    <Grid {...rest} />
  )
)`
  font-weight: 700;
  font-size: 1.4em;
  margin-top: 24px;
  text-align: center;
`;

export const PageUrl = styled(
  ({ fontWeight, color, fontSize, fontStyle, ...rest }: any) => (
    <Grid {...rest} />
  )
)`
  font-weight: 300;
  text-align: center;
`;

export const PageAvatar = styled(({ ...rest }: any) => <Avatar {...rest} />)`
  height: 100px;
  width: 100px;
  font-size: 2em;
  position: relative;
  cursor: pointer;

  &:hover .MuiAvatar-root {
    display: flex;
  }
`;

export const AvatarOverlay = styled(({ ...rest }: any) => <Avatar {...rest} />)`
  font-size: 2em;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${PRIMARY_COLOR};
  opacity: 0.5;
  cursor: pointer;
  display: none;

  & svg {
    display: none;
  }
`;

export const AvatarEditBadge = styled(({ ...rest }: any) => (
  <Avatar {...rest} />
))`
  height: 32px;
  width: 32px;
  font-size: 2em;
  border-radius: 50%;
  background-color: ${PRIMARY_COLOR};
  cursor: pointer;
`;

const toolbarIcon = `
  text-align: center;
  color: ${MEDIUM_GREY};
  svg {
    font-size: 50px;
  }
`;

export const ToolbarButton = styled(({ ...rest }: any) => <span {...rest} />)`
  ${toolbarIcon}
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  box-sizing: border-box;
  flex-direction: column;
  border-radius: 50%;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  min-width: 90px;

  &:hover {
    color: ${PRIMARY_COLOR};
  }

  &:hover span {
    color: ${PRIMARY_COLOR};
  }
`;

export const ToolbarIconText = styled(({ ...rest }: any) => <span {...rest} />)`
  font-size: 14px;
  margin-top: 8px;
  color: grey;
`;

export const VisibilityIcon = styled(({ ...rest }: any) => (
  <Visibility {...rest} />
))`
  font-size: 24px;
  color: ${MEDIUM_GREY};
  cursor: pointer;
  margin-left: 16px;

  &:hover {
    color: ${PRIMARY_COLOR};
  }
`;

export const EditPenIcon = styled(Edit)`
  color: ${MEDIUM_GREY};
  font-size: 20px;
  cursor: pointer;
  margin-left: 4px;

  &:hover {
    color: ${PRIMARY_COLOR};
  }
`;

export const IconOverlaySpan = styled("span")`
  color: ${MEDIUM_GREY};
  font-size: 20px;
  margin: 8px;

  &:hover svg {
    color: grey;
    opacity: 0.5;
  }
`;

export const DeleteIconOverlay = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 56px;
  height: 56px;
  cursor: pointer;
  transform: translateX(48%) translateY(35%);
`;

export const DeleteIcon = styled(Delete)`
  font-size: 20px;
  margin: 8px;
  left: 0;
  cursor: pointer;
  opacity: 0;
`;

export const ToolbarBottomToolsStyled = styled(Grid)`
  width: 100%;
  height: 80px;
  background-color: ${LIGHTER_GREY};
  border-radius: 0px 0px 15px 15px;
  margin-top: -40px;
  margin-bottom: 24px;
  min-width: 250px;
`;

export const ColorPickerSpan = styled(({ ...rest }: any) => <span {...rest} />)`
  position: fixed;
  z-index: 100;
`;
