<script lang="ts">
  import {
    Section,
    Container,
    Highlight,
    Button,
    Panel,
    Stack,
    Image,
    Heading,
    Text,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section
  id="koffie"
  class="py-3xl"
>
  <Container>
    <Panel class="dark-primary relative !overflow-visible shadow-2xl lg:py-2xl">
      <Stack
        row
        class="items-center"
      >
        <Highlight class="lg:max-w-lg">
          <Heading>{content.heading}</Heading>
          <Text>{content.textarea}</Text>
          <svelte:fragment slot="actions">
            <Button
              class="dark-primary"
              variant="solid"
              {...content.button_1}
            />
            <!-- <Button
              class="dark-primary"
              {...content.button_1}
            /> -->
          </svelte:fragment>
        </Highlight>
        <div class="-right-px h-[150%] lg:absolute lg:w-1/2">
          <Image
            class="lg:h-full lg:w-full lg:object-cover"
            {...content.image}
          />
        </div>
      </Stack>
    </Panel>
  </Container>
</Section>
