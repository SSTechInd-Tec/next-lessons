// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import MyNavBar from "@/components/Organisms/MyNavBar/MyNavbar";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Notifications position="top-right" />
          <MyNavBar>{children}</MyNavBar>
        </MantineProvider>
      </body>
    </html>
  );
}
