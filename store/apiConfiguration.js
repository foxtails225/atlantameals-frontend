export const state = () => ({
  urlLogin: 'auth/authenticate',
  urlGeneralSettings: 'items/general_information',
  urlRegister: 'custom/auth/register',
  urlGetProfileInfo: 'custom/profile/',
  urlSaveProfileInfo: 'custom/profile/save-profile',
  urlAddCard: 'custom/profile/add-card',
  urlChangePassword: 'custom/profile/change-password',
  urlChangeEmail: 'custom/profile/change-email',
  urlChangeEmailConfirmation: 'custom/profile/finish-email-change',
  urlGetCards: 'custom/profile/get-cards',
  urlGetStores: 'custom/delivery/',
  urlCheckDeliveryPostCode: 'custom/delivery/check-post-code',
  urlRemoveCard: 'custom/profile/remove-card',
  urlRewardsInfo: 'custom/rewards/',
  urlActivateGiftCard: 'custom/giftcards/activate',
  urlDeliveryAddress: 'custom/profile/delivery-address',
  urlBillingAddress: 'custom/profile/billing-address',
  urlSaveRefCode: 'custom/rewards/save-refcode',
  urlEmailInvite: 'custom/rewards/email-invite',
  urlRewardsFAQ: 'items/rewards_faq',
  urlPrices: 'items/prices?filter[name]=Meals',
  urlDeliveryAndPickupDays: 'items/delivery_and_pickup?filter[type]=1',
  urlDeliveryAndPickupPostalNumbers: 'items/delivery_and_pickup?filter[type]=0',
  urlProducts: 'custom/meals/',
  urlMenus: 'custom/menus/',
  urlGetMealPlansName: 'custom/meals/get-meal-plans',
  urlBreakfast: 'custom/meals/breakfast',
  urlSnacks: 'custom/meals/snacks',
  urlVeganBowl: 'custom/meals/vegan-bowl',
  urlSideDishes: 'custom/dishes/',
  urlGallery: 'items/gallery?fields=img.data',
  filterOptions: 'items/filter_options',
  publicEmail: 'customer@c.com',
  publicPassword: 'Customer',
  loginMode: 'cookie',
  getCartId: 'custom/cart/get-cart-id',
  saveCartContent: 'custom/cart/save-cart-content',
  urlPlaceOrder: 'custom/cart/create-new-order',
  baseUrl:
    'http://127.0.0.1:8081/backend/public/atlanta-meal-prep/',
  baseImgUrl: 'http://127.0.0.1:8081/',
  // baseUrl: 'https://projects.solcode.net/backend/public/atlanta-meal-prep/',
})
