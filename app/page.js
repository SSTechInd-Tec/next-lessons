"use client";

import DarkMode from "@/components/Atoms/DarkMode/DarkMode";
import Form from "@/components/Molecules/Form/Form";
import { Carousel } from "@mantine/carousel";
import { Accordion, Box, Button, Modal, Spoiler, Tabs } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./style.module.css";
import { IconPlus } from "@tabler/icons-react";

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  const groceries = [
    {
      emoji: "🍎",
      value: "Apples",
      description:
        "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
    },
    {
      emoji: "🍌",
      value: "Bananas",
      description:
        "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
    },
    {
      emoji: "🥦",
      value: "Broccoli",
      description:
        "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
    },

    {
      emoji: "Beeryy",
      value: "ldkfjgkldf",
      description: "sldfksjdlfksjdfklj",
    },
  ];

  return (
    <div>
      <Box mt={20}>
        <Accordion
          classNames={{ chevron: classes.chevron }}
          variant="contained"
          chevron={<IconPlus className={classes.icon} />}
        >
          {groceries.map((item) => (
            <Accordion.Item value={item.value}>
              <Accordion.Control>
                {item.emoji} {item.value}
              </Accordion.Control>
              <Accordion.Panel>
                <p>{item.description}</p>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>

        <Spoiler maxHeight={50} showLabel="Read more" hideLabel="Hide">
          <p>
            We Butter the Bread with Butter was founded in 2007 by Marcel
            Neumann, who was originally guitarist for Martin Kesici's band, and
            Tobias Schultka. The band was originally meant as a joke, but
            progressed into being a more serious musical duo. The name for the
            band has no particular meaning, although its origins were suggested
            from when the two original members were driving in a car operated by
            Marcel Neumann and an accident almost occurred. Neumann found
            Schultka "so funny that he briefly lost control of the vehicle."
            Many of their songs from this point were covers of German folk tales
            and nursery rhymes.
          </p>
        </Spoiler>
      </Box>
    </div>
  );
}
