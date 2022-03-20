import { StripeProvider } from '@stripe/stripe-react-native';

function Applepay() {
  return (
    <StripeProvider
      publishableKey="pk_test_51KFMKpSFhRwTxyXZDMXbRgR1LeBYbfdyZzuqldHxyFpZz3WYamRyYZ9428b0P8sXpk7zP3QMWJrwcO07dJ5HStGL00FHZ5gd72"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      // Your app code here
    </StripeProvider>
  );
}