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

<Section id="koffie">
  <Container>
    <Stack
      row
      class="items-center !gap-0"
    >
      <Panel
        class="dark shadow-xl max-lg:rounded-b-[0px] lg:rounded-r-[0px] xl:py-2xl"
      >
        <Highlight class="lg:max-w-lg">
          <Heading>{content.heading}</Heading>
          <Text class="!text-base-11">{content.textarea}</Text>
          <Button
            slot="actions"
            class="dark-primary"
            variant="solid"
            {...content.button_1}
          />
        </Highlight>
      </Panel>
      <Image
        class="shadow-2xl max-lg:rounded-t-[0px]"
        {...content.image}
      />
    </Stack>
  </Container>
</Section>
