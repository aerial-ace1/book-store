import { upperFirst, useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { GoogleButton } from "./GoogleButton";
import { TwitterButton } from "./TwitterButton";
import { IconKey, IconMail } from "@tabler/icons-react";

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Paper radius="md" p="xl" {...props}>
      <Text
        className="font-bold text-3xl fonr-montserrat mb-8 w-[80%] lg:w-[60%] m-auto"
        size="lg"
        fw={500}
      >
        Log In
      </Text>

      <form
        onSubmit={form.onSubmit(() => {})}
        className="w-[80%] lg:w-[60%] m-auto"
      >
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              radius="md"
            />
          )}

          <TextInput
            required
            placeholder="Your Email"
            value={form.values.email}
            leftSection={<IconMail size={20} />}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            placeholder="Password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            leftSection={<IconKey size={20} />}
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" className="invisible" />
          <Anchor component="button" size="sm" className="font-bold text-md">
            Forgot password?
          </Anchor>
        </Group>
        <button className="w-full m-auto bg-[#0062FF] text-white mt-4 p-2 rounded-lg">
          Login
        </button>
      </form>

      <Divider
        label="or"
        labelPosition="center"
        my="lg"
        className="w-[80%] lg:w-[60%] m-auto"
      />
      <Group className="w-[80%] lg:w-[60%] m-auto flex justify-around" mb="md" mt="md">
        <GoogleButton>Google</GoogleButton>
        <TwitterButton>Facebook</TwitterButton>
      </Group>

      <Group
        justify="space-between"
        mt="xl"
        className="w-[80%] lg:w-[60%] m-auto"
      >
        <Anchor
          component="button"
          type="button"
          c="dimmed"
          onClick={() => toggle()}
          size="xs"
        >
          {type === "register"
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </Anchor>
        <Button type="submit" radius="xl">
          {upperFirst(type)}
        </Button>
      </Group>
    </Paper>
  );
}
