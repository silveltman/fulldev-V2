<script lang="ts">
  import footer from '@data/footer.yml'
  import {
    Section,
    Container,
    Highlight,
    Form,
    Social,
    Textarea,
    Input,
    Text,
    Heading,
    Button,
    Panel,
    Icon,
    Stack,
    Image,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section>
  <Container>
    <Stack
      row
      class="!gap-md"
    >
      <Panel class="dark bg-base-1 !p-0 large">
        <Stack class="!gap-0">
          <Highlight class="p-lg">
            <Heading text={content.heading} />
            <Text
              class="!text-base-11"
              text={content.textarea}
            />
          </Highlight>
          <Image
            class="h-full w-full object-cover"
            {...content.image}
          />
        </Stack>
      </Panel>
      <Stack class="dark-primary !gap-md">
        <Stack class="!gap-md">
          <Panel>
            <Stack>
              <div class="flex items-center gap-md">
                <Button
                  href="/"
                  class="light-orange"
                >
                  <Icon name="circle" />
                </Button>
                <div class="flex flex-col gap-xs">
                  <Heading
                    secondary
                    text="test"
                  />
                  <Text
                    secondary
                    text="test"
                  />
                </div>
              </div>
              <div class="flex gap-sm">
                <Social
                  name="facebook"
                  href="#"
                />
                <Social
                  name="instagram"
                  href="#"
                />
                <Social
                  name="linkedin"
                  href="#"
                />
              </div>
            </Stack>
          </Panel>

          <!-- FORM -->
          <Panel class="light-primary">
            <Form>
              <div class="flex flex-col">
                <Text
                  secondary
                  class="!text-base-11"
                  as="label"
                  text="Naam"
                />
                <Input
                  label="Naam"
                  id="naam"
                />
              </div>
              <div class="flex flex-col">
                <Text
                  secondary
                  class="!text-base-11"
                  as="label"
                  text="Email"
                />
                <Input
                  label="Email"
                  id="email"
                  type="email"
                />
              </div>
              <div class="flex flex-col">
                <Text
                  secondary
                  class="!text-base-11"
                  as="label"
                  text="Telefoon"
                />
                <Input
                  label="Telefoon"
                  id="telefoon"
                  type="tel"
                />
              </div>
              <div class="flex flex-col">
                <Text
                  secondary
                  class="!text-base-11"
                  as="label"
                  text="Bericht"
                />
                <Textarea
                  label="Bericht"
                  id="bericht"
                />
              </div>

              <Button
                variant="solid"
                type="submit"
                text="Verstuur"
                class="light-primary"
              />
            </Form>
          </Panel>
        </Stack>
      </Stack>
    </Stack>
  </Container>
</Section>
