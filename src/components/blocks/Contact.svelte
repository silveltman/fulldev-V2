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
      class="items-start !gap-md"
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
            sizes="100vw"
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
                  href="tel:31683485163"
                  class="light-orange"
                >
                  <Icon name="phone" />
                </Button>
                <div class="flex flex-col gap-xs">
                  <Heading
                    secondary
                    text="Bellen"
                  />
                  <Text
                    secondary
                    text="316 83485163"
                  />
                </div>
              </div>
              <div class="flex items-center gap-md">
                <Button
                  href="mailto:contact@full.dev"
                  class="light-orange"
                >
                  <Icon name="mail" />
                </Button>
                <div class="flex flex-col gap-xs">
                  <Heading
                    secondary
                    text="Mailen"
                  />
                  <Text
                    secondary
                    text="contact@full.dev"
                  />
                </div>
              </div>
              <div class="flex gap-sm">
                {#each footer.socials as social, i}
                  <Social {...social} />
                {/each}
              </div>
            </Stack>
          </Panel>

          <!-- FORM -->
          <Panel class="light-primary">
            <Form
              key="fulldev"
              action="/bedankt"
            >
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
                  text="Email / telefoon"
                />
                <Input id="email-tel" />
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
