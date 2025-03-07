import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import strings from "../../../../localization";
import { PlansTypes } from "../../../../store/user/types";
import TriplePageTitle from "../../../components/page-title";
import { Button, Checkbox, FormControlLabel, Grid } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import {
  ACESSIBILITY_RED,
  LIGHT_GREY,
  PRIMARY_COLOR,
} from "./../../../../styles/colors";
import LoadingSpinner from "../../../components/loading-spinner";
import routes from "../../../../routes/paths";
import { IApplicationState } from "../../../../store";
import { getCurrencyPrefix, translateErrorMessage } from "./../utils";
import InternalLink from "../../../components/internal-link";
import { showErrorToast } from "./../../../../utils/toast";
import CustomButton from "../../../components/button-custom";
import { StripePaymentElement } from "./style";
import ExternalLink from "./../../../components/external-link/index";
import { getPlanNameByType, getRecurrency } from "../../../../utils/stripe";
import { Icon } from "@iconify/react";

interface IPaymentElementProps {
  planType: PlansTypes;
  recurrency: string;
  currency: string;
  changeToRecurrency: () => void;
}

const PaymentElement = ({
  planType,
  recurrency,
  changeToRecurrency,
}: IPaymentElementProps) => {
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const userEmail = useSelector(
    (state: IApplicationState) => state.user.profile?.email
  );

  const purchaseState = useSelector(
    (state: IApplicationState) => state.purchase
  );

  const [errorMessage, setErrorMessage] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  useEffect(() => {
    let timeoutAfterProcessing: NodeJS.Timeout | undefined;

    if (isProcessingPayment) {
      timeoutAfterProcessing = setTimeout(() => {
        showErrorToast(strings.generalErrors.unexpectedERror);
        setTimeout(() => {
          navigate(routes.root);
        }, 2000);
      }, 15000);
    }

    return () => {
      if (timeoutAfterProcessing) clearTimeout(timeoutAfterProcessing);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProcessingPayment]);

  useEffect(() => {
    if (!stripe || !elements) {
      if (canSubmit) setCanSubmit(false);
    } else {
      if (!canSubmit) setCanSubmit(true);
    }
  }, [stripe, elements, canSubmit]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!canSubmit) return;

    if (!stripe || !elements) {
      return;
    }

    if (!agreePrivacy) {
      setErrorMessage(strings.requiredPrivacyAccept);
      return;
    }

    setIsProcessingPayment(true);

    let returnUrl = process.env.REACT_APP_DOMAIN_URL + routes.purchaseSuccess;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: returnUrl,
        receipt_email: userEmail,
      },
    });

    // Reaches here only WHEN there is error
    // Otherwise, is redirected to [return_url]
    if (error?.message) {
      const translatedMessage: string = translateErrorMessage(error.message);
      setErrorMessage(translatedMessage);
    }

    setIsProcessingPayment(false);
  };

  return (
    <>
      <Grid mb="32px" mt="32px" textAlign="left">
        <CustomButton
          bgColor="unset"
          fontColor={LIGHT_GREY}
          hoverBgColor="unset"
          fontWeight={400}
          w="fit-content"
          p="0px"
          hoverFontColor={PRIMARY_COLOR}
          style={{
            marginLeft: "-8px",
            marginBottom: "32px",
            fontSize: "0.8em",
          }}
          onClick={() => {
            changeToRecurrency();
          }}
        >
          <Icon icon="ic:round-keyboard-arrow-left" fontSize="20px" />
          {strings.subscriptionPayment.changeRecurrency}
        </CustomButton>
      </Grid>
      <TriplePageTitle
        increasingSize
        marginBottom="70px"
        sizes={[1, 3, 0.8]}
        titles={[
          strings.thePlanYouSelectedIs,
          `${getPlanNameByType(planType)} - ${getRecurrency(recurrency)}${
            purchaseState.currency &&
            purchaseState.price &&
            ` - ${getCurrencyPrefix(purchaseState.currency)} ${
              purchaseState.price
            }`
          }`,
          strings.nowItsTimeToSubscribe,
        ]}
      />
      <form onSubmit={handleSubmit}>
        {errorMessage && (
          <Grid
            container
            justifyContent="center"
            pb="100px"
            color={ACESSIBILITY_RED}
          >
            {errorMessage}
          </Grid>
        )}
        <Grid container justifyContent="center">
          <StripePaymentElement />
        </Grid>
        <Grid container pt="48px" justifyContent="center">
          <FormControlLabel
            label={
              <>
                {strings.agreeWith}{" "}
                <InternalLink to={routes.terms}>
                  {strings.termsOfUse}
                </InternalLink>{" "}
                {strings.and}{" "}
                <InternalLink to={routes.privacy}>
                  {strings.privacyPolicies}
                </InternalLink>
              </>
            }
            control={
              <Checkbox
                checked={agreePrivacy}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setAgreePrivacy(event.target.checked);
                }}
              />
            }
          />
        </Grid>
        <Grid
          container
          pt="50px"
          pb="16px"
          fontSize="0.7em"
          justifyContent="center"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid pr="8px">
            <LockIcon fontSize="small" />
          </Grid>
          <Grid>
            {`${strings.subscriptionPayment.trustWarning}`}&nbsp;
            <ExternalLink to="https://stripe.com">Stripe</ExternalLink>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Button
            disabled={!canSubmit || !agreePrivacy || isProcessingPayment}
            type="submit"
            variant="contained"
            color="primary"
            style={{ minWidth: "200px" }}
          >
            {isProcessingPayment ? (
              <LoadingSpinner size={20} color="white" />
            ) : (
              "Submit"
            )}
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default PaymentElement;
