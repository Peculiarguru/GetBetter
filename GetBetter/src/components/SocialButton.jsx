import React from "react";
import { Button, rem } from "@mantine/core";

const SocialButton = ({ icon, children, backgroundColor, color }) => {
  return (
    <Button
      component="a"
      target="_blank"
      variant="outline"
      rel="noopener noreferrer"
      href=""
      leftIcon={icon}
      styles={(theme) => ({
        root: {
          backgroundColor: backgroundColor,
          color: color,
          height: rem(42),
          paddingLeft: rem(20),
          paddingRight: rem(20),
          "&:not([data-disabled])": theme.fn.hover({
            backgroundColor: theme.fn.darken("#00acee", 0.05),
          }),
        },

        leftIcon: {
          marginRight: theme.spacing.md,
        },
      })}
    >
      {children}
    </Button>
  );
};

export default SocialButton;
