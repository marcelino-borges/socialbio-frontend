import LocalizedStrings from "react-localization";
import { en } from "./locales/en";
import { pt } from "./locales/pt";

interface IAnimations {
  bounce: string;
  bounceIn: string;
  bounceInDown: string;
  bounceInLeft: string;
  bounceInRight: string;
  bounceInUp: string;
  bounceOut: string;
  bounceOutDown: string;
  bounceOutLeft: string;
  bounceOutRight: string;
  bounceOutUp: string;
  fadeIn: string;
  fadeInDown: string;
  fadeInDownBig: string;
  fadeInLeft: string;
  fadeInLeftBig: string;
  fadeInRight: string;
  fadeInRightBig: string;
  fadeInUp: string;
  fadeInUpBig: string;
  fadeOut: string;
  fadeOutDown: string;
  fadeOutDownBig: string;
  fadeOutLeft: string;
  fadeOutLeftBig: string;
  fadeOutRight: string;
  fadeOutRightBig: string;
  fadeOutUp: string;
  fadeOutUpBig: string;
  flash: string;
  flip: string;
  flipInX: string;
  flipInY: string;
  flipOutX: string;
  flipOutY: string;
  headShake: string;
  hinge: string;
  jello: string;
  lightSpeedIn: string;
  lightSpeedOut: string;
  pulse: string;
  rollIn: string;
  rollOut: string;
  rotateIn: string;
  rotateInDownLeft: string;
  rotateInDownRight: string;
  rotateInUpLeft: string;
  rotateInUpRight: string;
  rotateOut: string;
  rotateOutDownLeft: string;
  rotateOutDownRight: string;
  rotateOutUpLeft: string;
  rotateOutUpRight: string;
  rubberBand: string;
  shake: string;
  slideInDown: string;
  slideInLeft: string;
  slideInRight: string;
  slideInUp: string;
  slideOutDown: string;
  slideOutLeft: string;
  slideOutRight: string;
  slideOutUp: string;
  swing: string;
  tada: string;
  wobble: string;
  zoomIn: string;
  zoomInDown: string;
  zoomInLeft: string;
  zoomInRight: string;
  zoomInUp: string;
  zoomOut: string;
  zoomOutDown: string;
  zoomOutLeft: string;
  zoomOutRight: string;
  zoomOutUp: string;
}

interface IPlanDetails {
  name: string;
  benefits: string[];
}

export interface IDictionary {
  hide: string;
  activate: string;
  inactivate: string;
  checkOurPlans: string;
  youAreSpecial: string;
  recurrency: {
    title: string;
    monthly: string;
    month: string;
    yearly: string;
    year: string;
  };
  home: string;
  pages: string;
  theme: string;
  statistics: string;
  support: string;
  supportDescription: string;
  toGetSupport: string;
  pageNotFound: string;
  getInTouch: string;
  views: string;
  image: string;
  text: string;
  textImage: string;
  icon: string;
  video: string;
  launch: string;
  textOverImage: string;
  unknown: string;
  columns: string;
  rows: string;
  clicks: string;
  type: string;
  backgroundColor: string;
  fontColor: string;
  fillColor: string;
  uploadImage: string;
  uploadBackgroundImage: string;
  chooseEffect: string;
  toggleVisibility: string;
  remove: string;
  removeExisting: string;
  duplicate: string;
  viewPage: string;
  tools: {
    button: {
      name: string;
      dialogTitle: string;
      typeHelpText: string;
      columnsHelpText: string;
      rowsHelpText: string;
      borderRadiusHelpText: string;
      shadowHelpText: string;
      shadowStyles: {
        none: string;
        smooth: string;
        normal: string;
        hard: string;
        extreme: string;
      };
    };
    icon: {
      name: string;
    };
    video: {
      name: string;
    };
    launch: {
      name: string;
    };
    whatsapp: {
      name: string;
    };
    map: {
      name: string;
      textfieldMapUrlLabel: string;
    };
    spotify: {
      name: string;
      textfieldSpotifyUrlLabel: string;
    };
    progressBar: {
      name: string;
      textfieldProgressLabel: string;
    };
    counters: {
      name: string;
      textfieldCounterLabel: string;
      number: string;
      label: string;
    };
  };
  removeIcon: string;
  removeComponent: string;
  removePage: string;
  iconName: string;
  back: string;
  cancel: string;
  confirm: string;
  add: string;
  mountURL: string;
  searchIconMinCaracters: string;
  url: string;
  invalidUrl: string;
  hasToBeYoutubeVideo: string;
  colorPicker: string;
  removeComponentConfirmation: string;
  removeIconConfirmation: string;
  removePageConfirmation: string;
  removeUserConfirmation: string;
  yes: string;
  no: string;
  or: string;
  and: string;
  fileHandling: {
    chooseFile: string;
    chooseImage: string;
    fileReadyToUpload: string;
    fileDeletedSuccessfully: string;
    errorToDeleteFile: string;
    dragAndDropYourImage: string;
    dropYourImageHere: string;
  };
  clickToSearchIt: string;
  next: string;
  webSiteExample: string;
  emailExample: string;
  send: string;
  scheduleComponentVisibleDate: string;
  scheduleComponentVisibleDateInstructions: string;
  save: string;
  date: string;
  hour: string;
  time: string;
  urlRequired: string;
  textInComponentRequired: string;
  imageInComponentRequired: string;
  selectAllOptions: string;
  videoUrl: string;
  videoComponentDescription: string;
  youtubeUrlExample: string;
  youtubeIdExample: string;
  youtubeIdInstructions: string;
  youtubeVideoId: string;
  mapsInstructions: string;
  spotifyInstructions: string;
  clickHere: string;
  step: string;
  share: string;
  understood: string;
  invalidId: string;
  warningPrivatePage: string;
  create: string;
  chooseOneToCreate: string;
  createPage: string;
  pageName: string;
  pageUrl: string;
  pageUrlExample: string;
  requiredField: string;
  requiredFields: string;
  createPageError: {
    pageUrlBadFormat: string;
    cannotContainWhiteSpaces: string;
  };
  launchMessageLabel: string;
  launchMessageExample: string;
  launchComponentInstructions: string;
  launchDateTimeBeforeToday: string;
  days: string;
  hours: string;
  minutes: string;
  minutesAbbreviated: string;
  seconds: string;
  secondsAbbreviated: string;
  launchPrefixText: string;
  chooseAnimation: string;
  mountWhatsappURL: string;
  selectAnOption: string;
  selectACurrency: string;
  selectARecurrency: string;
  duration: string;
  startDelay: string;
  animation: string;
  animationInstruction: string;
  noAnimation: string;
  repeatInfinitely: string;
  name: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
  agreeWith: string;
  privacyPolicies: string;
  privacyPoliciesSubtitle: string;
  cookies: string;
  cookiesPolicies: string;
  cookiesPoliciesSubtitle: string;
  cookiesConsent: string;
  termsOfUse: string;
  terms: string;
  termsOfUseSubtitle: string;
  wishesCommunications: string;
  register: string;
  registerImperative: string;
  createYourAccount: string;
  signUp: string;
  signIn: string;
  signIn2: string;
  accessAccount: string;
  fillDataToAccessAccount: string;
  fillYourPersonalData: string;
  welcomeBack: string;
  passwordRequirements: string;
  requiredPrivacyAccept: string;
  profile: string;
  profileSubtitle: string;
  signOut: string;
  noAccountYet: string;
  alreadyHaveAccount: string;
  couldntFindPage: string;
  authErrors: {
    urlAlreadyExists: string;
    userAlreadyExists: string;
    invalidCredentials: string;
    userNotFound: string;
    weakPassword: string;
    invalidEmail: string;
    passwordMustAttendRequirements: string;
    invalidToken: string;
    signInAgain: string;
  };
  generalErrors: {
    unknownError: string;
    errorSignUp: string;
    errorSignIn: string;
    errorSignOut: string;
    internalError: string;
    signUpNotAllowed: string;
    unexpectedERror: string;
  };
  maximumFileSizeOf: string;
  animations: IAnimations;
  recommended: string;
  checkout: string;
  createNowYour: string;
  bio: string;
  forYourSocialMedia: string;
  landingPage: string;
  forYourProductOrBusiness: string;
  dependOnNoneToReleaseCreativity: string;
  haveAccessToPremiumResources: string;
  differentiate: string;
  getAPlanNow: string;
  yourPlanIs: string;
  thePlanYouSelectedIs: string;
  youreCloserNowBecomeSubscriber: string;
  nowChooseTheRecurrency: string;
  nowItsTimeToSubscribe: string;
  subscription: string;
  noSubscriptions: string;
  subscriptionPayment: {
    succeeded: string;
    processing: string;
    failed: string;
    declined: string;
    userAbort: string;
    processingError: string;
    somethingWentWrong: string;
    cardNumberIncomplete: string;
    paymentAlreadySucceeded: string;
    changeRecurrency: string;
    trustWarning: string;
    youHaveNoFinanceHistory: string;
    errorOnPaymentClientSecret: string;
    subscriptionStatuses: {
      incomplete: string;
      canceled: string;
      paid: string;
      succeeded: string;
    };
    amountPaid: string;
  };
  upgradeYourPlan: string;
  plan: string;
  freePlan: IPlanDetails;
  vipPlan: IPlanDetails;
  platinumPlan: IPlanDetails;
  currency: string;
  year: string;
  purchase: string;
  andWinAVipPlanFor: string;
  sorryThisIsNotAvailable: string;
  faq: {
    menu: string;
    title: string;
    description: string;
    stillNeedHelp: string;
  };
  createNowYourPage: string;
  successUpdatePage: string;
  errorUpdatePage: string;
  successRemoveComponent: string;
  errorRemoveComponent: string;
  successUpdateUser: string;
  errorUpdateUser: string;
  sorry: string;
  pagePreview: string;
  message: string;
  messageExample: string;
  errorSendingSupportContact: string;
  successSendingSupportContact: string;
  errorRecaptchaValidation: string;
  goToHomePage: string;
  goToPages: string;
  webiseCreatedBy: string;
  allRightsReserved: string;
  about: string;
  company: string;
  legal: string;
  privacy: string;
  deleteAccount: string;
  delete: string;
  deleteAccountSuccess: string;
  deleteAccountError: string;
  plansBlockings: {
    yourPlanDoesntAllowCreateNewPage: string;
    yourPlanDoesntAllowAnimation: string;
    yourPlanDoesntAllowComponentScheduling: string;
  };
  ok: string;
  somethingWentWrong: string;
  testimonials: {
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    userTestimonials: string;
    testimonials: string;
    userTestimonialsSubtitle: string;
    noTestimonials: string;
    createANewTestimonial: string;
    editATestimonial: string;
    zeroRatingDialogTitle: string;
    zeroRatingDialogText: string;
    deleteDialogTitle: string;
    deleteDialogText: string;
    leaveTestimonial: string;
  };

  yourGallery: string;
  fromYourGalleryOrTemplates: string;
  orUploadANewFile: string;
  orFromYourDevice: string;
  componentBorderRadius: string;
  borders: string;
  shadow: string;
  customScripts: {
    insertCustomScript: string;
    headerScript: string;
    endBodyScript: string;
    customScriptDescription: string;
    scriptNotValidated: string;
  };
  personalData: string;
  finance: {
    title: string;
    subtitle: string;
    profileTableHeaders: {
      plan: string;
      startDate: string;
      endDate: string;
      status: string;
    };
  };
  phoneNumber: string;
  color: string;
  home2: {
    mainHeader: string;
    mainSubheader: string;
    buttonCreateFreeAccount: string;
    earnSubscriptionLifetime: string[];
    areYouGonnaLoseIt: string;
    tripleTitles: string[];
    iconTextCards: {
      title: string;
      subtitle: string;
    }[];
    section1: {
      title: string;
      subtitle: string;
      button: string[];
    };
    section2: {
      title: string;
      chips: string[];
    };
    section3: {
      title: string;
    };
  };
}

// Composed dictionaries

let strings = new LocalizedStrings({
  en,
  pt,
});

export default strings;
