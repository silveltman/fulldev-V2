<script lang="ts">
  import {
    Section,
    Container,
    Highlight,
    Button,
    Stack,
    Heading,
    Text,
    Image,
    Social,
  } from 'fulldev-ui'

  export let content: any
</script>

<Section id="over-ons">
  <Container>
    <Stack
      row
      class="items-center"
    >
      <Image
        class="lg:col-span-3"
        sizes="100vw"
        {...content.image}
      />
      <Highlight class="lg:col-span-2">
        <Heading>{content.heading}</Heading>
        <Text class="!text-base-11">{content.textarea}</Text>
        <Button
          class="light-primary"
          slot="actions"
          {...content.button}
        />
      </Highlight>
    </Stack>
  </Container>
</Section>
