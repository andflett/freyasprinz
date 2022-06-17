// See Chakra UI theming documentation for more details
// https://chakra-ui.com/docs/theming/customize-theme

import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import colors from "./foundations/colors";
import fonts from "./foundations/fonts";

import Button from "./components/Button";
import Text from "./components/Text";
import Heading from "./components/Heading";
import Menu from "./components/Menu";
import FormLabel from "./components/FormLabel";
import Badge from "./components/Badge";
import Input from "./components/Input";

const Theme = extendTheme(
  {
    colors,
    fonts,
    components: {
      Button,
      FormLabel,
      Input,
      Badge,
      Text,
      Heading,
      Menu,
    },
  },
  withDefaultColorScheme({ colorScheme: "teal" })
);

export default Theme;
