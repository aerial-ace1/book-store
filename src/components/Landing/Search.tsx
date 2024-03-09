import { TextInput, TextInputProps, rem, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export function Search(props: TextInputProps) {
  return (
    <TextInput
      className="my-[5rem] lg:my-8 font-medium"
      size="lg"
      variant="unstyled"
      placeholder="Search for location..."
      rightSectionWidth={115}
      leftSection={
        <IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      rightSection={
        <Button className="bg-[#4D2C5E] px-8 rounded-2xl">Send</Button>
      }
      {...props}
    />
  );
}
